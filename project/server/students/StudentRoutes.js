var Student = require('./Student');
var jsonBody = require('body-parser').json();

function setStudentsRoutes(app, db){
    
    app.get('/school/students/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        console.log(id);
        Student.getOne(id, db)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
    
    app.post('/school/students',jsonBody, function(req, res){
        var newStudent = new Student(req.body.name, req.body.phone, req.body.email, req.body.img, req.body.courses);
		var status = newStudent.add(db);
		res.send(status);
    });    
    
    app.delete('/school/students/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        var status = Student.deleteOne(id, db);
        res.send(status);
    });    
}

module.exports = setStudentsRoutes;