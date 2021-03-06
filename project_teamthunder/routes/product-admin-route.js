const express = require('express');
const route = express.Router();
const productController = require('../controllers/admin/product-controller');

route.get('/', productController.getList);
// trả về form để nhập thông tin
route.get('/create', productController.create);
// nhận thông tin từ form, save vào database.
route.post('/create', productController.save);

route.get('/detail/:id', productController.getDetail);

route.get('/edit/:id', productController.edit);

route.post('/edit/:id', productController.update);

route.get('/delete/:id', productController.deleteWithForm);

module.exports = route;
