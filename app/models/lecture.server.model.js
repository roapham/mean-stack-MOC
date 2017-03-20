var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LectureSchema = new Schema({
    name: {
        type: String,
        required: 'Lecture name is required'
    },
    video: {
        type: String,
        required: 'Video url is required'
    },
    slide: String,
    course: {
        type: Schema.ObjectId,
        ref: 'Course',
        required: 'Lecture must belong to a course'
    },
});

mongoose.model('Lecture', LectureSchema); 