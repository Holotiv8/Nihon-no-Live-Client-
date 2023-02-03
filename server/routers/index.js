const express = require('express')
const router = express.Router()
const idolRoutes= require('./idolRoutes')
const productRoutes = require('./productRoutes')
const userRoutes = require("./userRoutes");
const favoriteRoutes = require('./favoriteRoutes')

router.use('/idols', idolRoutes)
router.use('/favorites',favoriteRoutes)
router.use('/products',productRoutes)
router.use("/users", userRoutes);

module.exports = router;
