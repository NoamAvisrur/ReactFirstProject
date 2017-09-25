var Course = require('./Course');

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
}

module.exports = setCoursesRoutes;