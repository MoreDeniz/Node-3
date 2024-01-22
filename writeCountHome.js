const fs = require('fs');   // импорт
const path = require('path');

const countHome = {
    "count": 1
}

const countJson = JSON.stringify(countHome, null, 2);
const pathToFile = path.join(__dirname, 'countHome.json'); // файл, кот. надо создать

fs.writeFileSync(pathToFile, countHome);


console.log('countJson');
fs.writeFileSync(pathToFile, countJson)
