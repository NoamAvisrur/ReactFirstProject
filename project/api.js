var express = require('express');
var jsonBody = require('body-parser').json();
var path = require('path');
var connect = require('./server/connectModule');
var cookieParser = require('cookie-parser');
var User = require('./server/login/User');

var app = express();

app.use(cookieParser());

app.get('/', function(req, res){
    if(req.cookies.cookieName){
        res.sendFile('index.html', { root: path.join(__dirname, '/public') });
    }else{
        res.redirect('/login');
    }
});

app.use(express.static('public'));

var setLoginRoute = require('./server/login/LoginRoutes.js');
var setSchoolRoutes = require('./server/school/SchoolRoutes.js');
var setCoursesRoutes = require('./server/courses/CourseRoutes.js');
var setStudentsRoutes = require('./server/students/StudentRoutes.js');
var setAdminsRoutes = require('./server/admins/AdminRoutes.js');

connect().then(function (db) {
    
    var testloggedin = function(req, res, next){
        User.checkUser(db, req.cookies.cookieName)
        .then(function (results) {
            if(results.length){
                return next();
            }else{
                res.send('not logged-in');
            }
        });  
    };
    
    app.all('/api/*', testloggedin);
    
    setLoginRoute(app, db);
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