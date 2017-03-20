var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CourseSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: 'Cource name is required'
	},
	faculty: {
		required: 'Please choose faculty',
		type: Schema.ObjectId,
		ref: 'Faculty'
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	created: {
        type: Date,
        default: Date.now
    },
    // lectures: [{
    // 	name: {
    // 		type: String,
    // 		trim: true,
    // 		required: 'Please enter lecture name'
    // 	},
    // 	video: {
    // 		type: String,
    // 		trim: true,
    // 		required: 'Please enter video url'
    // 	},
    // 	slide: {
    // 		type: String,
    // 		trim: true,
    // 	}
    // }]
});

mongoose.model('Course', CourseSchema); 