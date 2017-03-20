exports.render = function(req, res) {
    res.render('admin/index', {
        user: JSON.stringify(req.user),
        admin: 'true'
    });
};