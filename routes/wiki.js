const Express = require('express');
const Router = Express.Router();
const { db, Page, User } = require('../models');
const addPage = require('../views/addPage')


Router.get("/", async (req, res) =>{
  res.send("all wikis");
})

Router.post("/", async (req, res) =>{

  // console.log(req.body);

  const title = req.body.title;
  const content = req.body.content;
  try {
    const page = await Page.create({

      title : title,
      content: content,
    })

    res.redirect("/")

  } catch (error) {
    console.log(error)
  }

})

Router.get("/add",async (req, res) =>{
//retreive the add page
res.send(addPage())

})

module.exports = Router;
