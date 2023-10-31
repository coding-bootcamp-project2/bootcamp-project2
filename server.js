const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Register Handlebars.js as the template engine and configure the paths
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: 'handlebars', // Specify the file extension
  layoutsDir: path.join(__dirname, 'Handlebars/layouts'), // Path to layouts
  partialsDir: path.join(__dirname, 'Handlebars/partials'), // Path to partials
}));

app.set('view engine', 'handlebars');

// Serve static files (CSS, JavaScript, images) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
