const express = require('express');
const app = express();
let countHome = 1;
let countAbout = 1;

app.use((req, res, next) => {
    console.log('Поступил запрос', req.method, req.url);
    next();
});


app.get('/', (req, res) => {
    res.send(`<h1>Home page</h1><br><p>Количество посещений: ${countHome}</p><br><a href='/about'>To about</a>`);
    ++countHome;
});

app.get('/about', (req, res) => {
    res.send(`<h1>About page</h1><br><p>Количество посещений: ${countAbout}</p><br><a href='/'>To home</a>`);
    ++countAbout;
});

const port = 5000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
}); 



