const {Router} = require ('express')
const router = Router()
const uploadController = require("../Controllers/productController");
const uploadImg = require('../Controllers/multer')




router.get('/product', uploadController.getProduct)
router.post('/product',uploadImg.uploadImg, uploadController.newProduct)



module.exports = router