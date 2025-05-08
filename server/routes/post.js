const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router
    .get('/getAllPosts', async (req, res) => {
        try {
            const posts = await Post.getAllPosts()
            res.send(posts)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .post('/createPost', async (req, res) => {
        try {
            const post = await Post.createPost(req.body)
            res.send(post)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .get('/getPost', async (req, res) => {
        try {
            const post = await Post.getPost(req.query.postId)
            res.send(post)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .put('/updatePost', async (req, res) => {
        try {
            const post = await Post.updatePost(req.body)
            res.send(post)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .delete('/deletePost', async (req, res) => {
        try {
            const postId = req.query.postId
            await Post.deletePost(postId)
            res.send({success: "Post deleted successfully"})
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    .get('/getUserPosts', async (req, res) => {
        try {
            const userId = req.query.userId
            const posts = await Post.getUserPosts(userId)
            res.send(posts)
          } catch(err) {
            res.status(401).send({message: err.message})
          }
    })

    module.exports = router;
