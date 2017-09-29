var validator = require('validator');

class Student {
    constructor (name, phone, email, img, courses){
        this.name = validator.escape(name);
        this.phone = validator.escape(phone);
        this.email = validator.escape(email);
        this.img = validator.escape(img);
        this.courses = courses;
    }
    
    static getAll (db) {
        return db.collection('students').find().toArray()
    }
    
    static getOne (id, db){
        //return db.collection('students').findOne({_id: id})
        return db.collection('students').aggregate([
            {$match: {_id: id}},
            {
              $lookup:
                {
                  from: "courses",
                  localField: "courses",
                  foreignField: "_id",
                  as: "courses"
                }
            }
        ]).toArray()    
    }
    
    add(db){
        this.validate();
        console.log(this);
        //db.collection('courses').insert({
        //    name: this.name,
        //    description: this.photo,
        //    img: this.img
        //})
	}      
    
    validate(){
        if (validator.isEmpty(this.name)) {throw new Error('students name can not be empty')};
        if (validator.isEmpty(this.phone)) {throw new Error('students phone can not be empty')};
        if (validator.isEmpty(this.email)) {throw new Error('students email can not be empty')};
        if (validator.isEmpty(this.img)) {throw new Error('students img can not be empty')};
    }
}

module.exports = Student;