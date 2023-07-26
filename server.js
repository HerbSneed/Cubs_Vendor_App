const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const sequelize = require('./config/connection')
const app = express();
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sessionConfig));
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