const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quizesSchema = new Schema({
    example: { type: String, required:true }
});

const Quizes = mongoose.model('Quizzes',quizesSchema);

module.exports = Quizes;