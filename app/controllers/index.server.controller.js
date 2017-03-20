exports.render = function(req, res) {
	console.log(req.user);
    res.render('index', {
        title: 'Online Education',
        user: JSON.stringify(req.user)
    });
};