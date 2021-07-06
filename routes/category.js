const {Router} = require ('express')
const router = Router()
const uploadController = require("../Controllers/categoryController");


router.get('/category', uploadController.getCategory)
router.post('/category',uploadController.newCategory)



module.exports = router