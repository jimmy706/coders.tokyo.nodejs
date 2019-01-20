const db = require('../db');
module.exports.requireAuth = function(req, res, next){
    if(!req.signedCookies.userId){
        return res.redirect('/login');
    }
    let user = db.get('users').find({id: req.signedCookies.userId}).value();

    if(!user){
        return res.redirect('/login');
    }

    res.locals.user = user;
    next();
}