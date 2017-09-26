var Admin = require('./Admin');

function setAdminsRoutes(app, db){
    
    app.get('/admin/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        Admin.getOne(id, db)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
}

module.exports = setAdminsRoutes;