const express = require('express');
const User = require('../models/user');
const router = express.Router();


router
    .get('/getAllUsers', async (req, res) => {
        try {
            const user = await User.getAllUsers()
            res.send(user)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .post('/login', async (req, res) => {
      console.log("Incoming req.body:", req.body);
        try {
            const user = await User.login(req.body)
            res.send({...user, password: undefined})
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .get('/getUser', async (req, res) => {
        try {
            const user = await User.getUser(req.body)
            res.send(user[0])
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .post('/register', async (req, res) => {
      try {
        const user = await User.register(req.body)
        res.send({...user, password: undefined})
      } catch(err) {
        res.status(401).send({message: err.message})
      }
    })
    
    .put('/editUsername', async (req, res) => {
      try {
        console.log(req.body)
        const user = await User.editUsername(req.body)
        res.send({...user, password: undefined})
      } catch(err) {
        res.status(401).send({message: err.message})
      }
    })

    .delete('/deleteAccount', async (req, res) => {
      try {
        const userId =req.query.userId
        await User.deleteAccount(userId)
        res.send({success: "Guess you wont be fabulous anymore"})
      } catch(err) {
        res.status(401).send({message: err.message})
      }
    })



module.exports = router;