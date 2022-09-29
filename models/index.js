const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

function slugTitle(title){
    console.log(title);
    return title.replace(/\s+/g, '_').replace(/\W/g, '');

}

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "Lopum versi defo ak"
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

Page.addHook("beforeValidate", (page, options) =>{
    page.slug = slugTitle(page.title);
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = {
  db,
  Page,
  User
}
