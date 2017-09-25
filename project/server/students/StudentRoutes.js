var Student = require('./Student');

function setStudentsRoutes(app, db){
    
    app.get('/school/students/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        console.log(id);
        Student.getOne(id, db)
        .then(function (results) {
            console.log(results);
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
}

module.exports = setStudentsRoutes;