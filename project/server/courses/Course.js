class Course {
    constructor (name, description, image, db){
        this.name = name;
        this.desctiption = description;
        this.image = image;
        this.setDB(db);
    }
    
    set(db){
        this.db = db;
    }
    
    static getAll (db) {
        return db.collection('courses').find().toArray()
    }
    
    static getOne (id, db){
        return db.collection('courses').findOne({_id: id})
    }
}

module.exports = Course;