class Student {
    constructor (name, phone, email, image, db){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.image = image;
        this.setDB(db);
    }
    
    set(db){
        this.db = db;
    }
    
    static getAll (db) {
        return db.collection('students').find().toArray()
    }
    
    static getOne (id, db){
        return db.collection('students').findOne({_id: id})
    }
}

module.exports = Student;