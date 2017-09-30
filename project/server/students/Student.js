var validator = require('validator');
var mongoose = require('mongoose');

class Student {
    constructor (name, phone, email, img, courses){
        this.name = validator.escape(name);
        this.phone = validator.escape(phone);
        this.email = validator.escape(email);
        this.img = `img/students/${validator.escape(img)}`;
        this.courses = courses;
    }
    
    static getAll (db) {
        return db.collection('students').find().toArray()
    }
    
    static getOne (id, db){
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
        this.prepareCourses();
        console.log(this);
        db.collection('students').insert({
            name: this.name,
            phone: this.phone,
            email: this.email,
            img: this.img,
            courses: this.courses
        })
        return 201;
	}
    
    static deleteOne(id, db){
        db.collection('students').remove({
            "_id": mongoose.Types.ObjectId(id)
        });
        return 204;
    }
    
    prepareCourses(){
        this.courses = this.courses.map(function(id) {
            return mongoose.Types.ObjectId(id); 
        });
    }
    
    validate(){
        if (validator.isEmpty(this.name)) {throw new Error('students name can not be empty')};
        if (validator.isEmpty(this.phone)) {throw new Error('students phone can not be empty')};
        if (validator.isEmpty(this.email)) {throw new Error('students email can not be empty')};
        if (validator.isEmpty(this.img)) {throw new Error('students img can not be empty')};
    }
}

module.exports = Student;