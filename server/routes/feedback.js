const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

router
    .get('/getFeedback', async (req, res) => {
        try {
            const feedbacks = await Feedback.getAllFB()
            res.send(feedbacks)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .post('/addFeedback', async (req, res) => {
        try {
            const feedback = await Feedback.addFeedback(req.body)
            res.send(feedback)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    module.exports = router;