const {Router} = require ('express')
const router = Router()
const uploadController = require("../Controllers/basketController");


router.get('/basket', uploadController.getBasket)
router.post('/basket',uploadController.newBasket)



module.exports = router