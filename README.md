# TODO List App (REST & SOAP)

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Licenciatura en Ingeniería en Computación |
| **Materia** | Desarrollo de Aplicaciones Web |
| **Docente** | Luis Antonio Ramirez Martinez |
| **Actividad** | Tarea 3. TODO List (REST & SOAP) |
| **Alumno** | Jenny Guadalupe Quintana Sanchez |
| **Matrícula** | 374366 |
| **Fecha de entrega** | 04/09/2026 |

---

## Descripción

Este proyecto consiste en una aplicación web básica de gestión de tareas (TODO List) desarrollada con Node.js y Express. La aplicación permite administrar tareas a través de dos interfaces de comunicación: una API REST y un servicio web SOAP. Integra herramientas profesionales para el registro de eventos, refresco automático del servidor, análisis estático de código y pruebas unitarias.

**Nota sobre la entrega:**
- La entrega se realiza mediante este repositorio de GitHub.
- El repositorio contiene todo el código fuente necesario para instalar y ejecutar el proyecto a partir de una clonación limpia.
- No se incluye la carpeta `node_modules/`.
- El archivo `package-lock.json` forma parte integral del repositorio para asegurar la consistencia de las dependencias.

## Objetivo

Desarrollar una aplicación web para aplicar los conceptos fundamentales de administración de paquetes con NPM y exponer funcionalidades mediante servicios REST y SOAP, familiarizándose con un flujo de trabajo estándar en Node.js que incluye calidad de código y pruebas.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **NPM**: Gestor de paquetes para Node.js.
- **Express**: Framework para la creación de la aplicación web y la API REST.
- **soap**: Paquete para la implementación de la interfaz SOAP.
- **Log4js**: Biblioteca para el registro de eventos y logs del sistema.
- **Supervisor**: Herramienta para el refresco automático durante el desarrollo.
- **ESLint**: Herramienta de análisis estático para garantizar la calidad del código.
- **Jest**: Marco de pruebas para la implementación de pruebas unitarias.

## Requisitos previos

- **Node.js** (Versión 18 o superior recomendada)
- **Git** (Para la clonación del repositorio)

## Instalación

Para preparar el proyecto a partir de una clonación limpia, ejecute los siguientes comandos:

```bash
git clone https://github.com/a374366-commits/tarea3-todo-app.git
cd tarea3-todo-app
npm install
```

## Ejecución

Para poner en marcha el proyecto, puede utilizar el comando de producción o el de desarrollo:

```bash
# Modo producción
npm start

# Modo desarrollo (con Supervisor)
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Scripts / comandos disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de la aplicación en modo producción utilizando `node`. |
| `npm run dev` | Inicia la aplicación con **Supervisor**, lo que permite el reinicio automático del servidor al detectar modificaciones en el código fuente. |
| `npm test` | Ejecuta las pruebas unitarias implementadas con **Jest** para verificar la lógica de administración de tareas. |
| `npm run lint` | Ejecuta **ESLint** para realizar un análisis estático del código y asegurar que no existan errores de estilo o posibles bugs. |

## Funcionalidades / uso

### API REST
Endpoints disponibles bajo el prefijo `/api/tasks`:
- `GET /api/tasks`: Consultar todas las tareas existentes.
- `GET /api/tasks/:id`: Consultar una tarea específica por ID.
- `POST /api/tasks`: Crear una nueva tarea (enviar JSON con `title`).
- `PUT /api/tasks/:id`: Modificar una tarea existente.
- `DELETE /api/tasks/:id`: Eliminar una tarea.

### Servicio SOAP
- **Endpoint WSDL:** `http://localhost:3000/wsdl?wsdl`
- **Operaciones:** `GetTasks` (consulta de lista) y `AddTask` (creación de tarea).
- Reutiliza la misma lógica de negocio que la interfaz REST.

## Pruebas

Las pruebas unitarias están ubicadas en la carpeta `tests/` y cubren las operaciones de creación, consulta, modificación y eliminación de tareas. Se ejecutan con:
```bash
npm test
```

## Análisis de calidad de código

El proyecto utiliza ESLint con una configuración de "flat config" para mantener un código limpio y organizado. Para verificar el cumplimiento de las reglas:
```bash
npm run lint
```

## Estructura general del proyecto

```text
Tarea3/
|-- src/
|   |-- app.js          (Punto de entrada y configuración de servidores)
|   |-- logger.js       (Configuración de Log4js)
|   |-- routes/         (Rutas de la API REST)
|   |-- services/       (Lógica de negocio y persistencia en memoria)
|   `-- soap/           (Implementación SOAP y archivo WSDL)
|-- tests/              (Pruebas unitarias con Jest)
|-- logs/               (Carpeta generada para logs de aplicación)
|-- package.json        (Definición de scripts y dependencias)
|-- eslint.config.js    (Configuración de ESLint)
|-- .gitignore          (Archivos excluidos de Git)
`-- README.md           (Documentación del proyecto)
```

## Autor

Jenny Guadalupe Quintana Sanchez — 374366
