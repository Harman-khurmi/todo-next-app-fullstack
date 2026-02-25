const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
},
    { timestamp: true });

// const TodoModel = mongoose.model("todo", schema);  creates new model everytime it runs which cause error , to stop that we check if it is already created or not
const TodoModel = mongoose.models.todo || mongoose.model("todo", schema);
export default TodoModel;