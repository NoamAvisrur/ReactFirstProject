var validator = require('validator');
var mongoose = require('mongoose');

class Course {
    constructor (title, description, img ){
        this.title = validator.escape(title);
        this.desctiption = validator.escape(description);
        this.img = `uploads/img/${validator.escape(img)}`;
    }
    
    static getAll (db) {
        return db.collection('courses').find().toArray()
    }
    
    static getOne (id, db){
        return db.collection('courses').aggregate([
            {$match: {_id: id}},
            {
              $lookup:
                {
                  from: "students",
                  localField: "_id",
                  foreignField: "courses",
                  as: "courses"
                }
            }
        ]).toArray()
    }
    
    add(db){
        this.validate();
        db.collection('courses').insert({
            name: this.title,
            description: this.desctiption,
            img: this.img
            }
        )
        return 201;
	}  
    
    // update(){
        //this.validate();
        
    //}
    
    static deleteOne(id, db){
        db.collection('courses').remove({
            "_id": mongoose.Types.ObjectId(id)
        });
        return 204;
    }
    
    validate(){
        if (validator.isEmpty(this.title)) {throw new Error('course title can not be empty')};
        if (validator.isEmpty(this.desctiption)) {throw new Error('course description can not be empty')};
        if (validator.isEmpty(this.img)) {throw new Error('course img can not be empty')};
    }
}

module.exports = Course;