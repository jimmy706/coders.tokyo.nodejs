
// TODO: require module from my project
const db = require('../db');

module.exports.renderProductsPage = function(req, res){
    let page = parseInt(req.query.page) || 1;
    const itemPerPage = 12;
    const start = (page - 1) * itemPerPage;
    const end = page *itemPerPage;

    const links = Math.ceil(db.get("products").value().length / itemPerPage);
    const products = db.get("products").value().slice(start,end);

    return res.render("products/products", {products, links});
}