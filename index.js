const inquirer = require('inquirer');
const LOGO  = require('./lib/logo');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('./lib/shapes');

let questions = [
    {
        name: "logoText",
        type: "input",
        message:
          "Enter text for the logo. (Max 3 characters.)",
        validate: (logoText) =>
          logoText.length <= 3 ||
          "The message must not contain more than 3 characters",
      },

]