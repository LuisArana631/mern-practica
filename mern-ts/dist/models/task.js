"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema } = mongoose;
const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});
let Task = mongoose.model('Task', TaskSchema);
exports.default = Task;
