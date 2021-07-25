const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const hbs = require('hbs');

const viewsPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index');
}) //When you work with hbs you have to use res.render instead of res.send

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`Succesful conection to the port: http://localhost:${port}.`)
});
