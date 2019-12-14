# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# Building an Express API

<p align="center">
  <img src="api.png" width="70%">
</p>

## Getting started

1. Fork
1. Clone

## Prerequisites
- Sequelize & [Sequelize Migrations](https://sequelize.org/master/manual/migrations.html)
- Basic understanding of Express, Sequelize, and Postgres

## Learning Objectives
By the end of this, students should be able to:
- Build a full CRUD json api using Express, Sequelize, and Postgres

## Framing (5min)

> Take five minutes and read the following: 
>
> - https://www.codecademy.com/articles/what-is-rest
> - https://www.codecademy.com/articles/what-is-crud
> 
> ✋ **Give Me Five**

![](StackArchitecture.png)

### Introduction

In this lesson we are going to build a json express api using sequelize to interact with our postgres database.

We are going to build a products api with full CRUD functionality - that means our api will have the ability to:

| Feature                   | CRUD Action | HTTP Verb |              Endpoint              |
|---------------------------|:-----------:|:---------:|:----------------------------------:|
| Return all products       |      R      |    GET    | http://localhost:3000/products     |
| Return a specific product |      R      |    GET    | http://localhost:3000/products/:id |
| Create a new product      |      C      |    POST   | http://localhost:3000/products     |
| Update a product          |      U      |    PUT    | http://localhost:3000/products/:id |
| Delete a product          |      D      |    DEL    | http://localhost:3000/products/:id |

### Let's get started!

```sh
cd express-api
npm init -y && npm install sequelize pg &&  npm install --save-dev sequelize-cli
```

Next we will initialize a Sequelize project:

```sh
npx sequelize-cli init
```

Let's setup our database configuration:

express-api/config/config.json
```js
{
  "development": {
    "database": "products_api_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "products_api_test",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
}
```

> Notice: For production we use `use_env_variable` and `DATABASE_URL`. We are going to deploy this app to [Heroku](https://www.heroku.com). Heroku is smart enough to replace `DATABASE_URL` with the production database. You will see this at the end of the lesson.

Cool, we should now be all setup to create the database. Let's do that:

```sh
npx sequelize-cli db:create
```

Next we will create a Product model:

```sh
npx sequelize-cli model:generate --name Product --attributes title:string,description:text,imageUrl:string,price:float,link:string
```
> Checkout the Sequelize Data Types that are available: https://sequelize.org/master/manual/data-types.html

Now we need to execute our migration which will create the products table in our Postgres database along with the columns:

```sh
npx sequelize-cli db:migrate
```

> If you made a mistake, you can always rollback: `npx sequelize-cli db:migrate:undo`

Now let's create a seed file:

```sh
npx sequelize-cli seed:generate --name products
```

<details><summary>Let's edit the code for the products seed file (**Click Me**)</summary>
<p>

```js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      title: 'Apple AirPods',
      description: "aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor",
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083',
      price: 199,
      link: "https://www.apple.com/airpods",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Apple iPhone Pro',
      description: "interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna",
      imageUrl: 'https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_iPhone-11-Pro_Most-Powerful-Advanced_091019_big.jpg.large.jpg',
      price: 1000,
      link: "https://www.apple.com/iphone-11-pro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Apple Watch',
      description: "amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae",
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/44-alu-space-sport-black-nc-s4-1up?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1549036770374',
      price: 499,
      link: "https://www.apple.com/watch",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Vespa Primavera',
      description: "https://www.vespa.com/us_EN/vespa-models/primavera.html",
      imageUrl: 'https://www.vespa.com/dam/jcr:92489b91-681b-4018-ac12-aa3d71276e73/Primavera_Verde_Relax_my19_00.png',
      price: 3000,
      link: "https://www.vespa.com/us_EN/vespa-models/primavera.html",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'New Balance 574 Core',
      description: "risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit",
      imageUrl: 'https://nb.scene7.com/is/image/NB/ml574egb_nb_02_i?$pdpPictLG$',
      price: 84,
      link: "https://www.newbalance.com/pd/574-core/ML574-EG.html",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Tribe Messenger Bike 004',
      description: "turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi",
      imageUrl: 'https://cdn.shopify.com/s/files/1/0604/3445/products/texas_mess.jpg?v=1490109070',
      price: 675,
      link: "https://tribebicycles.com/collections/messenger-series/products/mess-004-tx",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Stumptown Hair Bender Coffee',
      description: "curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla",
      imageUrl: 'https://d1rusy4hxccwbq.cloudfront.net/spree/images/1692/pdp_desktop_large/media.nl?1524324843',
      price: 16,
      link: "https://www.stumptowncoffee.com/products/hair-bender",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
```

</p>
</details>

###

Execute the seed file:

```sh
npx sequelize-cli db:seed:all
```

> Made a mistake? You can always undo: `npx sequelize-cli db:seed:undo`

Drop into psql and query the database for the demo user:

```sh
psql products_api_development
SELECT * FROM "Products";
```

Create a .gitignore file `touch .gitignore`!

```sh
/node_modules
.DS_Store
.env
```

Cool, enough Sequelize. Now, Express. Let's install Express:

```sh
npm install express
npm install nodemon -D
```

And now let's create our Express boilerplate:

```sh
touch server.js
```

Modify your package.json file to support nodemon. Also, let's create a command `npm db:reset` that will drop the database, create the database, run the migrations, and seed!

```js
....
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js",
    "db:reset": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
  },
....
```

Now back to our server code. Here is the boiler plate:

```js
const express = require('express');
const PORT = process.env.PORT || 3000;

const { Product } = require('./models');

const app = express();

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("This is root!");
});

app.get('/products', async (req, res) => {
    const products = await Product.findAll()
    res.json(products)
})

app.get('/products/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const product = await Product.findByPk(id)
    res.json(product)
})
```

Let's make sure our server works:

```sh
npm start
```

Open http://localhost:3000/products you should see a nice json list of products.

##

![](api-cartoon.jpg)

##

Congrats! Now let's add the ability to create a product:

```js
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json({ product })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})
```

Notice how we use the `req.body` object. In order to use `req.body` we need to install an [Express Middleware](https://expressjs.com/en/guide/using-middleware.html) called [body-parser](https://www.npmjs.com/package/body-parser). Body parser reads the HTTP body sent from the client and makes it available via the `req.body` object.

Let's install `body-parser`:

```sh
npm install body-parser
```
Add the following lines of code to the top of server.js:

```js
const bodyParser = require('body-parser');
app.use(bodyParser.json())
```

Great! Now the `req.body` object is available and our post route should work. Let's test it using [Postman](https://www.getpostman.com)!

First, run your server:

```sh
npm start
```

Use this sample json to create a POST request on Postman:

```js
{
    "title": "Audi RS3",
    "description": "aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor",
    "imageUrl": "https://cdn.motor1.com/images/mgl/J70PJ/s1/audi-rs3-sportback-by-abt-sportsline.jpg",
    "price": 56000,
    "link": "https://www.audiusa.com/models/audi-rs3"
}
```

![](ExpressPost.gif)

Awesome! Now let's add the ability to update a product:

```js
app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
        await product.update(req.body)
        res.json({
            product
        })
    } catch (e) {
        res.json({
            message: e.message
        })
    }
})
```

Test this on Postman. Testing update is similar to testing create the only difference is that we switch Postman from "POST" to "PUT" from the drop down.

Last, but not least, we need the ability to delete a product:

```js
app.delete('/products/:id', async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } })
        res.json({
            message: `Product with id ${req.params.id} was destroyed!`
        })
    } catch (e) {
        res.json({
            message: e.message
        })
    }
})
```

Test this on Postman, switching the HTTP verb to DELETE.

We now have an API with full CRUD functionality built in.

**Well Done!**

### Deployment

Let's deploy our app to [heroku](https://www.heroku.com).

First we need to update our package.json:

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js",
    "db:reset": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
  },
```

> Make sure you're on the `master` branch!

1. `heroku create your-heroku-app-name`
2. `heroku buildpacks:set heroku/nodejs`
3. `heroku addons:create heroku-postgresql:hobby-dev --app=your-heroku-app-name`
4. `git status`
5. `git commit -am "add any pending changes"`
6. `git push heroku master`
7. `heroku run npx sequelize-cli db:migrate`
8. `heroku run npx sequelize-cli db:seed:all`

> Having issues? Debug with the Heroku command `heroku logs --tail` to see what's happening on the Heroku server.

Test the endpoints :)

> https://your-heroku-app-name.herokuapp.com/products

> https://your-heroku-app-name.herokuapp.com/products/1

**Excellent!**

> ✊ **Fist to Five**

## Feedback

> [Take a minute to give us feedback on this lesson so we can improve it!](https://forms.gle/vgUoXbzxPWf4oPCX6)
