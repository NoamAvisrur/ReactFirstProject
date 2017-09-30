var Course = require('./Course');
var jsonBody = require('body-parser').json();

function setCoursesRoutes(app, db){
    
    app.get('/school/courses/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        Course.getOne(id, db)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
 
    app.post('/school/courses',jsonBody, function(req, res){
		var newCourse = new Course(req.body.title, req.body.description, req.body.img);
		var status = newCourse.add(db);
		res.send(status);
    });
    
    app.delete('/school/courses/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        var status = Course.deleteOne(id, db);
        res.send(status);
    });

}

module.exports = setCoursesRoutes;