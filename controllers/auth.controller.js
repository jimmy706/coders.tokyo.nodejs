const md5 = require('md5');

// TODO: require module from my project
const db = require('../db');

module.exports.login = function(req, res){ //render login page
	res.render('auth/login');
}

module.exports.postLogin = function(req, res){
    const {email, password} = req.body;

    let user = db.get('users').find({email: email}).value();
    if(!user) {
        return res.render('auth/login', {
            errors: ["User doesn't exist"]
        })
    }
    else if(user.password !== md5(password)){
        return res.render('auth/login', {
            errors: ["Wrong password"]
        })
    }
    else{
        res.cookie("userId", user.id,{
            signed: true
        });
        return res.redirect('/user')
    }
}