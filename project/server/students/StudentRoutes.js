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
		var newStudent = new Student(req.body.name, req.body.phone, req.body.email, req.body.img, req.body.courses);
		newStudent.add(db);
		res.send(201);
    });    
}

module.exports = setStudentsRoutes;