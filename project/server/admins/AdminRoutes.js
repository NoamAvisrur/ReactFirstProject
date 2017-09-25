var Admin = require('./Admin');

function setAdminsRoutes(app, db){
    
    app.get('/admin/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        console.log(id);
        Admin.getOne(id, db)
        .then(function (results) {
            console.log(results);
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
}

module.exports = setAdminsRoutes;