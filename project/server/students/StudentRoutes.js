var Student = require('./Student');
var jsonBody = require('body-parser').json();
var multer = require('multer');
var upload = multer({ dest: './public/uploads/img'});

function setStudentsRoutes(app, db){
    
    app.get('/api/school/students/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        Student.getOne(id, db)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
    
    app.post('/api/school/students', jsonBody, upload.single('file'), function(req, res){
        var newStudent = new Student(req.body.name, req.body.phone, req.body.email, req.body.courses, req.file.filename);
		res.sendStatus(newStudent.add(db));
    });    
    
    app.delete('/api/school/students/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        var status = Student.deleteOne(id, db);
        res.send(status);
    });    
}

module.exports = setStudentsRoutes;