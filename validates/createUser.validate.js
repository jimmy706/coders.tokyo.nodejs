module.exports.createUser = function(req, res, next){
    // validations form create user
    const errors = [];

	if(!req.body.name)
		errors.push('Name is required');
	if(!req.body.age)
		errors.push('Age is requried');

	if(errors.length){
		res.render('user/create', {
			errors,
			values: req.body
		});
		return; //stop the function when errors happened
    }
    res.locals.isValidated = true;
    next();
}