const router = require('express').Router();

const { loginUser, logOut } = require('../controllers/auth.controllers')

router.post('/login', loginUser);
router.get('/logout', logOut);


module.exports = router;