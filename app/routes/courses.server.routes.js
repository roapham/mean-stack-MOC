var users = require('../../app/controllers/users.server.controller'),
    courses = require('../../app/controllers/courses.server.controller');
module.exports = function(app) {
    app.route('/api/courses')
        .get(courses.list)
        .post(users.requiresLogin, users.isLecturer, courses.create);

    app.route('/api/courses/:courseId')
        .get(courses.read)
        .put(users.requiresLogin, courses.hasAuthorization, courses.update)
        .delete(users.requiresLogin, courses.hasAuthorization, courses.delete);
    app.param('courseId', courses.courseByID);

    app.route('/api/my-courses')
        .post(users.requiresLogin, users.isLecturer, courses.create)
        .get(users.requiresLogin, users.isLecturer, courses.listByCreator);

    app.route('/api/my-courses/:myCourseId')
        .get(courses.read)
        .put(users.requiresLogin, courses.hasAuthorization, courses.update)


    // app.route('/api/my-courses/:courseId/lectures')
    //     .get(courses.getLectures)
    //     .post(courses.createLecture)

    app.param('myCourseId', courses.courseByID);
}; 