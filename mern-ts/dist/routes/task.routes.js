"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = __importDefault(require("../models/task"));
const router = express_1.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_1.default.find();
    res.json(tasks);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield task_1.default.findById(req.params.id);
    res.json(task);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const task = new task_1.default({ title, description });
    yield task.save();
    res.json({ status: 'Task Saved' });
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const newTask = { title, description };
    yield task_1.default.findByIdAndUpdate(req.params.id, newTask);
    res.json({ status: 'Task Updated' });
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield task_1.default.findByIdAndRemove(req.params.id);
    res.json({ status: 'Task Deleted' });
}));
exports.default = router;
