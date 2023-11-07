// Import necessary libraries and modules
const express = require("express");
const session = require("express-session");
const exhbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");

// Import routes
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const charactersAllRoute = require("./controllers/api/charactersallroute");

// Create the Express app
const app = express(); // Initialize the app

// Configure session
const sess = {
  secret: "Super secret secret",
  cookie: { sameSite: "strict" },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

// Create the Handlebars engine
const hbs = exhbs.create({ helpers });

// Set up middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// Set the routes
app.use("/characters_all", charactersAllRoute);

// Set the view engine to Handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Sync and listen
sequelize.sync({ force: false }).then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log("Now Listening"));
});
