const createTask = (req, res) => {
    res.json({ message: 'Task created (Stub)' })
}

const getTasks = (req, res) => {
    res.json({ message: 'All tasks (Stub)' })
}

const updateTask = (req, res) => {
    res.json({ message: 'Task updated (Stub)' })
}

const deleteTask = (req, res) => {
    res.json({ message: 'Task deleted (Stub)' })
}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}