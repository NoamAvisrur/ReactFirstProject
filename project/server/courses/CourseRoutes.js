var Course = require('./Course');
var jsonBody = require('body-parser').json();
var multer = require('multer');
var upload = multer({ dest: './public/uploads/img'});

function setCoursesRoutes(app, db){
    
    app.get('/api/school/courses/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        Course.getOne(id, db)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
 
    app.post('/api/school/courses',jsonBody, upload.single('file'), function(req, res){
		var newCourse = new Course(req.body.title, req.body.description, req.file.filename);
        res.sendStatus(newCourse.add(db));
    });
    
    app.delete('/api/school/courses/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        res.sendStatus(Course.deleteOne(id, db));
    });
    
    app.put('/api/school/courses/:id',jsonBody, upload.single('file'), function(req, res){
		var id = require('mongodb').ObjectID(req.params.id);
        var newCourse = new Course(req.body.title, req.body.description, req.file.filename);
        res.sendStatus(newCourse.edit(db, id));
    });    

}

module.exports = setCoursesRoutes;