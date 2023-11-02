// Import necessary libraries and modules
const express = require('express');
const session = require('express-session');
const exhbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

// Import routes
const charactersAllRoute = require('./controllers/api/charactersallroute');

// Import database connection
const sequelize = require('./config/connection');


// Create the Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Configure session
const sess = {
  secret: 'Super secret secret',
  cookie: { sameSite: 'strict' },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// Create the Handlebars engine
const hbs = exhbs.create();

// Set up middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set the routes
app.use('/characters', charactersAllRoute);

// Set the view engine to Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

