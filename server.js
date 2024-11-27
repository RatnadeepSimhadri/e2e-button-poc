const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Zoid Demo' });
});

app.get('/button', (req, res) => {
    res.render('button', { buttonText: 'Open Modal' });
});

app.get('/popup', (req, res) => {
    res.render('popup', {
        title: req.query.title || 'Default Modal Title',
        content: req.query.content || 'Default Modal Content'
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});