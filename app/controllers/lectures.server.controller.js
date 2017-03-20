var mongoose = require('mongoose'),
    Lecture = mongoose.model('Lecture');

var getErrorMessage = function (err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};
exports.create = function (req, res) {
    var lecture = new Lecture(req.body);
    lecture.creator = req.user;
    lecture.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(lecture);
        }
    });
};
exports.list = function (req, res) {
    Lecture.find().populate({path:'course', populate:{path:'creator', select: 'firstName lastName fullName'}})
    .populate({path:'course', populate:{path:'faculty'}}).exec(function (err, lectures) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(lectures);
        }
    });
};
exports.lectureByID = function (req, res, next, id) {
    Lecture.findById(id).populate({ path:'course', populate:{ path:'creator'} }).exec(function (err, lecture) {
        if (err) return next(err);
        if (!lecture) return next(new Error('Failed to load lecture ' +
            id));
        req.lecture = lecture;
        next();
    });
};
exports.getByCourse = function(req, res, next, id) {
    Lecture.find({ course: mongoose.Types.ObjectId(id) })
        .populate({ path:'course', populate:{ path:'creator', select: 'firstName lastName fullName'} })
        .exec( function( err, courses ) {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                })
            } else {
                res.json(courses);
            }
        });
};
exports.read = function (req, res) {
    res.json(req.lecture);
};
exports.update = function (req, res) {
    var lecture = req.lecture;
    lecture.name = req.body.name;
    lecture.video = req.body.video;
    lecture.slide = req.body.slide;
    lecture.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(lecture);
        }
    });
};
exports.delete = function (req, res) {
    var lecture = req.lecture;
    lecture.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(lecture);
        }
    });
};
exports.hasAuthorization = function (req, res, next) {
    if (req.lecture.course.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};