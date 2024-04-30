import express from 'express'
import {engine} from 'express-handlebars'
import path, {dirname} from 'path'
import controllers from './controllers/index.controllers.js'
import morgan from 'morgan'
const app = express()
const __dirname = dirname(import.meta.url).replace('file://', '');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
}));
app.set('view engine', 'hbs');
app.use(morgan('dev'));
app.use(controllers)
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});