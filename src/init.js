#!/usr/bin/env node

const { execSync } = require("child_process"); // execSync: Se importa la función execSync del módulo child_process, que permite ejecutar comandos del sistema de manera sincrónica desde Node.js.
const path = require("path"); //path: Se importa el módulo path, que proporciona utilidades para trabajar con rutas de archivos y directorios.

const repoUrl = "https://github.com/moisesisaiaso/plantilla-exp-seq.git"; //repoUrl: La URL del repositorio de GitHub que quieres clonar.
const projectName = process.argv[2] || "mi-nuevo-proyecto"; //projectName: El nombre del proyecto, que se toma del tercer argumento de la línea de comandos (process.argv[2]). Si no se proporciona un nombre, usa 'mi-nuevo-proyecto' como valor predeterminado.

execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" }); //Este comando clona el repositorio desde repoUrl al directorio projectName. stdio: 'inherit' asegura que la salida del comando se muestre en la consola.
execSync(`rm -rf ${path.join(projectName, ".git")}`, { stdio: "inherit" }); //Este comando elimina el directorio .git dentro del directorio projectName para desvincular el historial de Git del repositorio original.

// mensajes de confirmacion
console.log(`Proyecto clonado en ${projectName}`);
console.log(`cd ${projectName} && npm install && npm start`);
