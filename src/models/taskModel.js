import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required ']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    pay: {
        type: Number,
        required: [true, 'Pay is required']
    },
    deadline: {
        type: Date,
        required: [true, 'Deadline is required']
    },
    language: {
        type: String,
        required: [true, 'Language is required']
    }
})

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task