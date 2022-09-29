const Express = require('express');
const Router = Express.Router();
const { db, Page, User } = require('../models');
const addPage = require('../views/addPage')
const wikipage = require('../views/wikipage')
Express('json')

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

    res.redirect(`/wiki/${page.slug}`)

  } catch (error) {
    console.log(error)
  }

})


Router.get("/add",async (req, res) =>{
  //retreive the add page
  res.send(addPage())
  
})

Router.get('/:slug', async (req, res, next) => {
  try{
    const page = await Page.findOne({
      where: {
      slug: req.params.slug
      }
    });
    const wpage = wikipage(page, 'bob')
    console.log(wpage)
    res.json(wpage)
  } 
  catch (err) {
    next(err)
  }
});

module.exports = Router;
