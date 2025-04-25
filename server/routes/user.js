const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/Users',  (req, res) => {
    try {
        const users = User.getAllUsers();
        res.send(users);
    } 

    catch(err){
        res.status(500).send({message: err.message});
    }
})


"http://localhost:3000/users/getAllUsers"

module.exports = router;