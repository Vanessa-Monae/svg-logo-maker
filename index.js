const inquirer = require('inquirer');
const LOGO  = require('./lib/logo');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('./lib/shapes');