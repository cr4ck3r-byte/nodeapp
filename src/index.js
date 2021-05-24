const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
//config
app.set('port', 3000 || process.env.PORT);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    partialsDir: path.join(app.get('views'), 'partials'),
}))
app.set('view engine', '.hbs');
//middelware


//routes
app.use(require('./routes/index'));
app.use(require('./routes/descargar'));

//static files 
app.use(express.static(path.join(__dirname,'public')));


//server listener 
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});