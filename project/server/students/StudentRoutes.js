var Student = require('./Student');
var jsonBody = require('body-parser').json();

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
    
    app.post('/school/students',jsonBody, function(req, res){
        console.log(req.body);
		//var newCourse = new Course(req.body.title, req.body.description, req.body.img);
		//newCourse.add(db);
		res.send(201);
    });    
}

module.exports = setStudentsRoutes;