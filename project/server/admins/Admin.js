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
        //return db.collection('admins').findOne({_id: id})
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
}

module.exports = Admin;