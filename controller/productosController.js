const fs = require('fs');
const path = require('path');
const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productosController = {
    list: (req,res) => {
        res.render('home',{productos})
    },
    create: (req,res) => {
        res.render('productos/creacionProd');
    },
    stock: (req,res) => {
        const {marca,modelo,precio} = req.body;
        const newProduct = {
            id: productos.length + 1,
            marca,
            modelo,
            precio
        }
        productos.push(newProduct);
        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "))
        res.redirect('/');
    }

}

module.exports = productosController;
