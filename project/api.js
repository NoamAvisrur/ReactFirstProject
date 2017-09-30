var express = require('express');
var app = express();

app.use(express.static('public'));
var connect = require('./connectModule');

//var testloggedin = function(req, res, next){
     //console.log(req.cookies);
     //if(req.cookies.name === 'xxx'){
     //    return next();
     //}
     //return res.status(401).send('err');
    // res.redirect('/#!/login');
//}

//app.all('/*', testloggedin);

var setSchoolRoutes = require('./server/school/SchoolRoutes.js');
var setCoursesRoutes = require('./server/courses/CourseRoutes.js');
var setStudentsRoutes = require('./server/students/StudentRoutes.js');
var setAdminsRoutes = require('./server/admins/AdminRoutes.js');

connect().then(function (db) {

    setSchoolRoutes(app, db);
    setCoursesRoutes(app, db);
    setStudentsRoutes(app, db);
    setAdminsRoutes(app, db);
    
}).catch(function (err) {
	throw new Error(err);
});

app.listen(3000, function () {
	console.log('server listening');
});