const express = require('express');
const router = express.Router();
const logger = require('../logger');
const taskService = require('../services/taskService');

router.get('/', (request, response) => {
    response.json(taskService.getTasks());
});

//GET
router.get('/:id', (request, response) => {
    const id = request.params.id;
    response.json(taskService.getTaskById(id));
});

router.post('/', (request, response) => {
    const { title } = request.body;
    if (!title) {
        logger.warn("Intento de creación de tarea sin título");
        return response.status(400).json({ error: "El título es obligatorio" });
    }
    const task = taskService.createTask(title);
    logger.info(`Tarea creada: [${task.id}] ${task.title}`);
    response.status(201).json(task);
});

//PUT
router.put('/:id', (request, response) => {
    const id = request.params.id;
    let taskToUpdate = taskService.updatedTask(id, request.body);
    logger.info(`Tarea con el id = ${id} se ha modificado. `);
    response.json(taskToUpdate);
});

//DELETE
router.delete('/:id', (request, response) => {
    const id = request.params.id;
    let taskToDelete = taskService.deleteTask(id);
    logger.warn(`Tarea con el id = ${id} se ha eliminado. `);
    response.json(taskToDelete);
});

module.exports = router;
