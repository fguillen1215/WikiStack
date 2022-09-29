
const Express = require('express');
const Morgan = require('morgan');
const layout = require("./views/layout");
const app = Express();
app.use(Express.static(__dirname + "/public"))
app.get('/', (req, res) => {

  res.send(layout(""));


});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

'hello'