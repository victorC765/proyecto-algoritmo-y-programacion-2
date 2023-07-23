const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([{
  type: 'input',
  name: 'nombre',
  message: '¿Cuál es tu nombre?',
  default: 'fulanito',
},{
  type: 'input',
  name:'año',
  message:'¿En que año naciste?',
  default: '2005'
  },{
  type: 'input',
  name: 'color',
  message: '¿Cuál es tu color favorito?',
  default: 'verde',
},{
  type: 'input',
  name:'país',
  message:'¿En que país vives?',
  default: 'Perú'
  },{
    type: 'input',
    name:'comida',
    message:'¿Cuál es tu comida favorita?',
    default: 'pizza'
    }
])
.then((answers) => {
  fs.writeFile('data.json', JSON.stringify(answers), (err) => {
    if (err) throw err;
    console.log('los datos han sido guardados berifique data.json');
  });
});