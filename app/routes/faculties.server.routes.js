var users = require('../../app/controllers/users.server.controller'),
    faculties = require('../../app/controllers/faculties.server.controller');

module.exports = function(app) {
    app.route('/api/faculties')
        .get(faculties.list)
        .post(users.requiresLogin, faculties.isAdmin, faculties.create);

    app.route('/api/faculties/:facultyId')
        .get(faculties.read)
        .put(users.requiresLogin, faculties.isAdmin,
            faculties.update)
        .delete(users.requiresLogin, faculties.isAdmin,
            faculties.delete);
    app.param('facultyId', faculties.facultyByID);
}; 