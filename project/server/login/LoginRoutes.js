var User = require('./User');
var jsonBody = require('body-parser').json();
var bcrypt = require('bcrypt');
var path = require('path');

function setLoginRoute(app, db){
    
    app.get('/login', function(req, res){
        res.sendFile('login.html', { root: path.join(__dirname, '../../public') });
    });
    
    app.post('/login',jsonBody, function(req, res){
        db.collection('admins').find({name: req.body.name}).toArray()
        .then(function (results) {
            if(results.length === 0){
                res.send('wrong name');
            }else{
                bcrypt.compare(req.body.password, results[0].password, function(err, reslt) {
                    if(!reslt){
                        res.send('wrong password');    
                    }else{
                        var newUser = new User(req.body.name, results[0].role_id, results[0].img);
                        var status = newUser.save(db);
                        res.cookie('cookieName', newUser.name, { maxAge: 30 * 60 * 1000, httpOnly: true });
                        res.sendStatus(status);  
                    }
                });    
            }   
        });
    });
    
    app.post('/logout',jsonBody, function(req, res){
        db.collection('users').remove({
            "name": req.cookies.cookieName
        });
        res.clearCookie("cookieName");        
        res.sendStatus(205);
    });
    
    app.get('/user', function(req, res){
        User.getUser(db, req.cookies.cookieName)
        .then(function (results) {
            res.set({'Content-Type': 'application/json'});
			res.send(JSON.stringify(results));
        });
    });    

}

module.exports = setLoginRoute;