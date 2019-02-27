const db = require('../db');
const shortId = require('shortid');
module.exports.renderTransferPage = function(req, res, next){
    return res.render('transfer/transfer', { csrfToken: req.csrfToken() })
}

module.exports.postTransferMoney = function(req, res, next){
    req.body.id = shortId.generate();
    req.body.ammount = parseInt(req.body.ammount);
    req.body.userId = req.signedCookies.userId

    db.get("transfer").push(req.body).write();
    
    res.redirect("/transfer");
}