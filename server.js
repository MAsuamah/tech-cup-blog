//Requirements
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
require('dotenv').config();
const hbs = exphbs.create({ helpers });

//Express/port setup
const app = express();
const PORT = process.env.PORT || 3001;


//Session setup
const sess = {
  secret: '!epL[.O<Dv?',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//Set up handlebars middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Middleware for routes/path/sessions
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});