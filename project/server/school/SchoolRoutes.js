var Student = require('../students/Student.js');
var Course = require('../courses/Course.js');
var Admin = require('../admins/Admin.js');
var User = require('../login/User.js');
var async = require('async');
var cookieParser = require('cookie-parser');

function setSchoolRoutes(app, db){
    
	app.get('/api/school', function (req, res) {
        async.parallel([          
            function(callback) {
                Student.getAll(db)
                .then(function (students) {
                    callback(null, students);
                });
            },
             function(callback) {
                Course.getAll(db)
                .then(function (courses) {
                    callback(null, courses);
                });
            },
             function(callback) {
                Admin.getAll(db)
                .then(function (admins) {
                    callback(null, admins);
                });
            },
            function(callback) {
                User.getUser(db, req.cookies.cookieName)
                .then(function (user) {
                    callback(null, user);
                });
            }            
        ],
        function(err, results) {
			res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
	    });
    });
}

module.exports = setSchoolRoutes;