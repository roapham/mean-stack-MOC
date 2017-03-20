var users = require('../../app/controllers/users.server.controller'),
    lectures = require('../../app/controllers/lectures.server.controller');
module.exports = function(app) {
    app.route('/api/lectures')
        .get(lectures.list)
        .post(users.requiresLogin, users.isLecturer, lectures.create);
        // .post(lectures.create);


    app.route('/api/lectures/:lectureId')
        .get(lectures.read)
        .put(users.requiresLogin, lectures.hasAuthorization,
            lectures.update)
        .delete(users.requiresLogin, lectures.hasAuthorization,
            lectures.delete);
        // .delete(lectures.delete)
        // .put(lectures.update);
    app.param('lectureId', lectures.lectureByID);


    app.route('/api/:thisCourseId/lectures')
        .get(lectures.read)
    app.param('thisCourseId', lectures.getByCourse)
}; 