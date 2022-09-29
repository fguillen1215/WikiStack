
const Express = require('express');
const Morgan = require('morgan');
const layout = require("./views/layout");
const { db, Page, User } = require('./models');
const usersRouter = require('./routes/users');
const wikiRouter = require('./routes/wiki');

const app = Express();
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
app.use(Express.static(__dirname + "/public"))
app.use((Morgan('dev')))
app.use(Express.urlencoded ({
  extended : false
}));




app.get('/', (req, res) => {
  res.redirect('/wiki');
});

app.use('/wiki', wikiRouter);
app.use('/users', usersRouter);


async function init() {
  await db.sync()

  const PORT = 1337;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
init();

