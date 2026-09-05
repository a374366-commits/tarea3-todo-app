const taskService = require("../services/taskService");
const logger = require("../logger");

module.exports = {
    TaskService: {
        TaskServicePort: {
            GetTasks(args, callback) {
                const tasks = taskService.getTasks();
                logger.info("Lista de tareas enviada en soap");
                callback({ tasks: tasks });
            },
            AddTask(args, callback) {
                const task = taskService.createTask(args.title);
                logger.info("tarea creada en soap");
                callback({ task });
            }
        }
    }
};
