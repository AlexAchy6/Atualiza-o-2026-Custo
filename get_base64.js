import fs from 'fs';
const data = fs.readFileSync('./src/assets/logo.jpg');
console.log(data.toString('base64'));
