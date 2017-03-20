var mongoose = require('mongoose'),
    Faculty = mongoose.model('Faculty');

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
    var faculty = new Faculty(req.body);
    // faculty.name = req.name;
    faculty.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(faculty);
        }
    });
};
exports.list = function (req, res) {
    Faculty.find().exec(function (err, faculties) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(faculties);
        }
    });
};
exports.facultyByID = function (req, res, next, id) {
    Faculty.findById(id).exec(function (err, faculty) {
        if (err) return next(err);
        if (!faculty) return next(new Error('Failed to load faculty ' +
            id));
        req.faculty = faculty;
        next();
    });
};
exports.read = function (req, res) {
    res.json(req.faculty);
};
exports.update = function (req, res) {
    var faculty = req.faculty;
    faculty.name = req.body.name;
    faculty.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(faculty);
        }
    });
};
exports.delete = function (req, res) {
    var faculty = req.faculty;
    faculty.remove(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(faculty);
        }
    });
};
exports.isAdmin = function (req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).send({
            message: 'User is not admin'
        });
    }
    next();
};