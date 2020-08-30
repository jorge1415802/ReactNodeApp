const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const flash = require('connect-flash');
const db = require('../dbConfig');
const {database}= require('../db');
const engine = require('react-engine');

//settings
const app = express();
require('./lib/passport');
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.engine(
    ".jsx",
    engine.server.create({
      reactRoutes: path.join(__dirname, "routes.jsx")
    })
  );
app.set('Views',path.join(__dirname,'/src/Views'));
app.set('view engine','jsx');
app.set('view',engine.expressView);


//middlewares
app.use(session({
    secret:'ReactNodeApp',
    resave:false,
    saveUninitialized:false,
    store: new MySQLStore(database)
}))
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//globals
app.use((req,res,next)=>{
    app.locals.sucsess = req.flash('sucsess');
    next();
})

//routes
app.use(express.static(DIST_DIR));
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});


app.use(require('./routes/api.routes'));

//start server
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});