const shortid = require('shortid');

// TODO: require module from my project
const db = require('../db');


module.exports.index = function(req, res){ //render link: localhost:PORT/user
	res.render('user/user', {              // render file: user.pug
		users: db.get('users').value()
	});
}

//TODO: handle GET request for search user
module.exports.searchUser = function(req, res){
	let searchKey = req.query.q.toLowerCase();
	let matchedUsers = db.get('users').value().filter(user => {
		return user.name.toLowerCase().indexOf(searchKey) !== -1;
	})
	res.render('user/search-result',{
		users: matchedUsers,
		key: req.query.q
	});
}

//TODO: handle POST request for create user
module.exports.createUser = function(req, res){	

	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/user');
}

module.exports.renderViewUser = function(req, res){
	const id = req.params.userId;
	const user = db.get('users').find({id}).value();
	
	res.render('user/view', {user});
}

module.exports.renderCreateUser =  function(req, res){
	res.render('user/create');
}
