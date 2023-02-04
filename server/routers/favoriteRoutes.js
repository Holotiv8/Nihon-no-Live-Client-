const express = require('express')
const favoriteController = require('../controllers/favoriteController')
const authentication = require('../middlewares')
const router = express.Router()

router.get('/',authentication,favoriteController.favoriteIdolList)
router.post('/:IdolId',authentication,favoriteController.addFavoriteIdol)
router.delete('/:id',authentication,favoriteController.deleteFav)

module.exports=router