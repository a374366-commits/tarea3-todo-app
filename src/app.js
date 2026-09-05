const express = require('express');
const taskRouter = require('./routes/tasks');
const logger = require('./logger');
const fs = require('fs');
const soap = require('soap');
const taskSoap = require('./soap/taskSoap');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/api/tasks', taskRouter);

app.use((request, response)=>{
    logger.warn("Not found");
    response.status(404).send("Not found");
});

// Registra cualquier error no controlado ocurrido en las rutas REST o SOAP.
app.use((error, request, response, next) => {
    logger.error(error.stack || error.message || error);
    if (response.headersSent) return next(error);
    response.status(error.status || 500).json({ error: "Error interno del servidor" });
});

const server = app.listen(3000, ()=>{
    logger.info("El servidor esta activo y corriendo el puerto 3000");
    const wsdlPath = path.join(__dirname, 'soap', 'taskService.wsdl');
    const wsdl = fs.readFileSync(wsdlPath, 'utf8');

    soap.listen(server, '/wsdl', taskSoap, wsdl);
});
