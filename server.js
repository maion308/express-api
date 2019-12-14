const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { Product } = require('./models');

app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('This is root!');
});

app.get('/products', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

app.get('/products/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await Product.findByPk(id)
    res.json(product);
});

app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json({product});
    } catch(e) {
        res.status(500).json({
            message: e.message
        });
    }
});


app.delete('/products/:id', async (req, res) => {
    try {
        await Product.destroy({
            where: {id: req.params.id}
        });
        res.json({
            message: `Product with id ${req.params.id} was destroyed!`
        });
    } catch (e) {
        res.json({
            message: e.message
        });
    }
});


app.put('/product/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.body);
        await Product.update(req.body);
        res.json({
            product
        });
    } catch (e) {
        res.json({
            message: e.message
        });
    }
});