class Admin {
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
        return db.collection('admins').find().toArray()
    }
    
    static getOne (id, db){
        return db.collection('admins').findOne({_id: id})
    }
}

module.exports = Admin;