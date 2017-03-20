var users = require('../../app/controllers/users.server.controller'),
    admin = require('../../app/controllers/admin.server.controller'),
    passport = require('passport');
module.exports = function(app) {

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .get(users.renderSignin);
        // .post(passport.authenticate('local', {
        //     successRedirect: '/',
        //     failureRedirect: '/signin',
        //     failureFlash: true
        // }));

    app.post('/signin', 
        passport.authenticate('local'), 
        function(req, res){
            if ( req.user.role === 'admin') { res.redirect('/#!/admin'); }
            if ( req.user.role === 'lecturer' ) { res.redirect('/#!/lecturer'); }
            else { res.redirect('/#!/'); }
        });
    // app.post('/signin', function(req, res, next) {
    //     passport.authenticate('local', function(err, user, info) {
    //         if (err) { return next(err); }
    //         // Redirect if it fails
    //         if (!user) { console.log('not user'); return res.redirect('/signin'); }
    //         else {
    //             console.log('user');
    //             console.log(user);
    //             if (user.role === 'admin') { console.log('admin'); return res.redirect('/#!/admin'); }
    //             else { return res.redirect('/'); }
    //         }
    //     })(req, res, next);
    // });
    app.get('/signout', users.signout);
    app.route('/signup-admin')
        .get(users.renderSignupAdmin)
        .post(users.signup);
    // app.route('/#!/admin')
    //     .get(admin.render);

    // app.route('/#!/admin/add-account')
    //     .post(users.requireAdmin, users.signup);

    app.route('/api/users')
        .get(users.requiresLogin, users.requireAdmin, users.list)
        .post(users.requiresLogin, users.requireAdmin, users.create);
}; 