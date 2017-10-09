var validator = require('validator');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

class Admin {
    constructor (name, phone, email, role, password, img){
        this.name = validator.escape(name);
        this.phone = validator.escape(phone);
        this.email = validator.escape(email);
        this.role = validator.escape(role);
        this.password = validator.escape(password);
        this.img = `uploads/img/${validator.escape(img)}`;         
    }
    
    static getAll (db) {
        return db.collection('admins').aggregate([
            {
              $lookup:
                {
                  from: "roles",
                  localField: "role_id",
                  foreignField: "_id",
                  as: "roles"
                }
            }
        ]).toArray()
    }
    
    static getOne (id, db){
        return db.collection('admins').aggregate([
            {$match: {_id: id}},
            {
              $lookup:
                {
                  from: "roles",
                  localField: "role_id",
                  foreignField: "_id",
                  as: "roles"
                }
            }
        ]).toArray()
    }
    
    add(db){
        this.validate();
        bcrypt.hash(this.password, 10, function(err, hash) {
            this.password = hash;
            db.collection('admins').insert({
                name: this.name,
                phone: this.phone,
                email: this.email,
                img: this.img,
                role_id: mongoose.Types.ObjectId(this.role),
                password: this.password
            })            
        }.bind(this));
        return 201;  
	}
    
    static deleteOne(id, db){
        db.collection('admins').remove({
            "_id": mongoose.Types.ObjectId(id)
        });
        return 204;
    }    
    
    validate(){
        if (validator.isEmpty(this.name)) {throw new Error('admins name can not be empty')};
        if (validator.isEmpty(this.phone)) {throw new Error('admins phone can not be empty')};
        if (validator.isEmpty(this.email)) {throw new Error('admins email can not be empty')};
        if (validator.isEmpty(this.img)) {throw new Error('admins img can not be empty')};  
        if (validator.isEmpty(this.role)) {throw new Error('admins role can not be empty')};
        if (validator.isEmpty(this.password)) {throw new Error('admins password can not be empty')};        
    }
    
}

module.exports = Admin;