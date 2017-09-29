var Course = require('./Course');
var jsonBody = require('body-parser').json();

function setCoursesRoutes(app, db){
    
    app.get('/school/courses/:id', function (req, res) {
        var id = require('mongodb').ObjectID(req.params.id);
        console.log(id);
        Course.getOne(id, db)
        .then(function (results) {
            console.log(results);
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });
 
    app.post('/school/courses',jsonBody, function(req, res){
        console.log(req.body.description);
		var newCourse = new Course(req.body.title, req.body.description, req.body.img);
		newCourse.add(db);
		res.send(201);
    });
}

module.exports = setCoursesRoutes;