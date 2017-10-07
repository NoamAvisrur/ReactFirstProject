var validator = require('validator');
var mongoose = require('mongoose');

class User {
    constructor (name, role, img){
        this.name = name;
        this.role = role;
        this.img = img;
    }
    
    static getUser (db, cookieName) {
        return db.collection('users').aggregate([
            {$match: {name: cookieName}},
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
    
    static checkUser (db, cookie) {
        return db.collection('users').find({name: cookie}).toArray()
    }
    
    save(db){
        db.collection('users').insert({
            name: this.name,
            role_id : this.role,
            img: this.img,
            created: new Date()
        });
        return 202;
    }
    
}

module.exports = User;