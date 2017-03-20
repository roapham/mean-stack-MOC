var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var FacultySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Please enter faculty name',
        trim: true
    }
});
mongoose.model('Faculty', FacultySchema);