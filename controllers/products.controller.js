
// TODO: require module from my project
const db = require('../db');
const {Product} = require("../models/products.models");

module.exports.renderProductsPage = async function(req, res){
    // let page = parseInt(req.query.page) || 1;
    // const itemPerPage = 12;
    // const start = (page - 1) * itemPerPage;
    // const end = page *itemPerPage;

    // const links = Math.ceil(db.get("products").value().length / itemPerPage);
    // const products = db.get("products").value().slice(start,end);

    // return res.render("products/products", {products, links});


    // TODO: get products list with mongodb
    const itemPerPage = 12;
    let page = parseInt(req.query.page) || 1;
    const start = (page - 1) * itemPerPage;
    const end = page *itemPerPage;
    const links = Math.ceil((await Product.find()).length / itemPerPage);
    const products = (await Product.find()).slice(start,end);

    return res.render("products/products", {products, links});
}

module.exports.addToCart = function(req ,res, next){
    const productId = req.params.productId;
    const sessionId = req.signedCookies.sessionId;

    let countProduct = db
        .get("sessions")
        .find({id: sessionId})
        .get("cart." + productId, 0)
        .value()

    db
        .get("sessions")
        .find({id: sessionId})
        .set("cart." + productId, countProduct + 1)
        .write();

    res.redirect('/products');
}


module.exports.renderCartPage = function(req, res) {
    const sessionId = req.signedCookies.sessionId;
    const productAddedId = db.get("sessions").find({id: sessionId}).get("cart").value();
    let cartList = [];
    for(let key in productAddedId){
        let product = {
            info: db.get("products").find({id: key}).value(),
            amount: productAddedId[key]
        }
        cartList.push(product);
    }

    return res.render("products/cart", {cartList})
}
