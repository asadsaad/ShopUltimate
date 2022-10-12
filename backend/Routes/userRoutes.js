const express = require('express')

const router = express.Router()
const {signup, login,loaduser, passwordchange,resetpassword,resetpasswordlink,verifyuser, sellerverify} = require("../Controllers/userController")
const {auth} = require('../middleware/auth')

router.post('/signup',signup)
router.post('/login',login)
router.get('/',auth,loaduser)
router.post('/passwordchange',auth,passwordchange)
router.post('/resetpasswordlink',resetpasswordlink)
router.post('/resetpassword',resetpassword)
router.post('/verify',verifyuser)
router.post('/sellerphoneverify',sellerverify)







module.exports = router