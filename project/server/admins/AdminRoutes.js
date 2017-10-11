var Admin = require('./Admin');
var jsonBody = require('body-parser').json();
var multer = require('multer');
var upload = multer({ dest: './public/uploads/img'});

function setAdminsRoutes(app, db){
    
    app.get('/api/admins/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        Admin.getOne(id, db)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });

    app.post('/api/admins',jsonBody, upload.single('file'), function(req, res){
		var newAdmin = new Admin(req.body.name, req.body.phone, req.body.email, req.body.role, req.body.password, req.file.filename);
		res.sendStatus(newAdmin.add(db));
    }); 
    
    app.delete('/api/admins/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        var status = Admin.deleteOne(id, db);
        res.send(status);
    });   
    
    app.put('/api/admins/:id',jsonBody, upload.single('file'), function(req, res){
		var id = require('mongodb').ObjectID(req.params.id);
        var newAdmin = new Admin(req.body.name, req.body.phone, req.body.email, req.body.role, req.body.password, req.file.filename);
        res.sendStatus(newAdmin.edit(db, id));
    });      

}

module.exports = setAdminsRoutes;