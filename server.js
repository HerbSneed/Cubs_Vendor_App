const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const sequelize = require('./config/connection');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

const force = process.env.FORCE_SYNC === 'false';

sequelize.sync({
  force
}).then(() => {
  app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
  });
});
