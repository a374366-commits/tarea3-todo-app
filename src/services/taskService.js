let tasks = [];
let nextId = 1;

function getTasks() {
  return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === Number(id));
}

function createTask(title) {
  const task = {
    id: nextId++,
    title: title,
    completed: false
  };
  tasks.push(task);
  return task;
}

function updatedTask(id, data) {
  const task = tasks.find((item) => item.id === Number(id));
  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.completed !== undefined) task.completed = data.completed;

  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((item) => item.id === Number(id));
  if (index === -1) return null;
  return tasks.splice(index, 1)[0];
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updatedTask,
  deleteTask
};
