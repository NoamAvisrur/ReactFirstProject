var Admin = require('./Admin');
var jsonBody = require('body-parser').json();

function setAdminsRoutes(app, db){
    
    app.get('/api/admins/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        Admin.getOne(id, db)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });

    app.post('/admins',jsonBody, function(req, res){
		var newAdmin = new Admin(req.body.name, req.body.phone, req.body.email, req.body.img, req.body.role, req.body.password);
		var status = newAdmin.add(db);
		res.sendStatus(status);
    }); 
    
    app.delete('/admins/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        var status = Admin.deleteOne(id, db);
        res.send(status);
    });      

}

module.exports = setAdminsRoutes;