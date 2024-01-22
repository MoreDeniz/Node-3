// Запись в файл
const fs = require('fs');
const path = require('path');

// const countHome = {
//     "count": 1
// }

const pathToFile = path.join(__dirname, 'countHome.json');

let countHome = JSON.parse(fs.readFileSync(pathToFile));
countHome.count += 1;

const countJson = JSON.stringify(countHome, null, 2);

fs.writeFileSync(pathToFile, countJson);

