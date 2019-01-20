// TODO: require module from npm
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// TODO: require module from my project
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const productsRoutes = require("./routes/products.routes");
const {requireAuth} = require("./middleware/auth.middleware");

// TODO: instaling module
const app = express();
const port = 3001;

// SET UP MIDDLEWARE
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// path
app.use(express.static('public'));

// cookies parser
app.use(cookieParser(process.env.AUTH_SECRET));


app.set('view engine','pug'); // set engin to render to html (pug, jsx, mustache...)
app.set('views', './views'); // location to render


app.get('/', function(req, res){ //render link: localhost:PORT/
	res.render('index',{title: "Landing page"});//render file: index.pug
})

app.use('/user', requireAuth, userRoutes);
app.use('/', authRoutes);
app.use('/products', productsRoutes);

app.listen(port, function(){
	console.log(`Server start at port ${port}.`);
})