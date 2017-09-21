var express = require('express');
var jsonBody = require('body-parser').json();
var async = require('async');
var app = express();

app.use(express.static('public'));
var connect = require('./connectModule');

connect().then(function (db) {

	app.get('/school', function (req, res) {
        async.parallel([
            function(callback) {
                db.collection('students').find().toArray()
                .then(function (students) {
                    callback(null, students);
                })
            },
             function(callback) {
                db.collection('courses').find().toArray()
                .then(function (courses) {
                    callback(null, courses);
                })
            },
             function(callback) {
                db.collection('admins').find().toArray()
                .then(function (admins) {
                    callback(null, admins);
                })
            }             
        ],
        function(err, results) {
			res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
	    })
    })
    
    app.get('/school/:id', function (req, res) {
        var id = req.params.id;
        console.log(id);
        db.collection('students').find({_id: id}).toArray()
        .then(function (results) {
            console.log(results);
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        })
    })
    
}).catch(function (err) {
	throw new Error(err);
});

app.listen(3000, function () {
	console.log('server listening');
});