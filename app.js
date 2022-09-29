
const Express = require('express');
const Morgan = require('morgan');
const layout = require("./views/layout");
const { db, Page, User } = require('./models');


const app = Express();
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
app.use(Express.static(__dirname + "/public"))
app.use((Morgan('dev')))
app.get('/', (req, res) => {

  res.send(layout(""));


});
async function init() {
  // await Page.sync();
  // await User.sync();
  await db.sync()
  
  const PORT = 1337;
  
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
init();

