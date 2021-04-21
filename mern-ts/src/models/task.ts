import mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true }
});

let Task = mongoose.model('Task', TaskSchema);

export default Task;