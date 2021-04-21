import { Request, Response, Router } from 'express';
import Task from '../models/task';

const router = Router();

router.get('/', async (req:Request, res:Response) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/:id', async (req:Request, res:Response) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req:Request, res:Response) => {
    const { title, description } = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'Task Saved'});
});

router.put('/:id', async (req:Request, res:Response) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req:Request, res:Response) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
});


export default router;
