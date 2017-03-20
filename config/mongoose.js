var config = require('./config'),
    mongoose = require('mongoose');
module.exports = function() {
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');
    require('../app/models/article.server.model');
    require('../app/models/faculty.server.model');
    require('../app/models/lecture.server.model');
    require('../app/models/course.server.model');

    return db;
}; 