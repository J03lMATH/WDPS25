const con = require('./db_connect.js');

async function createTable() {
    const sql= `CREATE TABLE IF NOT EXISTS posts (
        postId INT AUTO_INCREMENT PRIMARY KEY,
        userId INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(userId)
    )`;
    await con.query(sql);
}
createTable()

async function createPost(post) {
    const sql = `INSERT INTO posts (userId, title, content) VALUES (?, ?, ?)`;
    const result = await con.query(sql, [post.userId, post.title, post.content]);
    return { ...post, postId: result.insertId };
}

async function getAllPosts() {
    const sql = `SELECT * FROM posts`;
    const result = await con.query(sql);
    return result;
}

async function getPost(postId) {
    const sql = `SELECT * FROM posts WHERE postId = ?`;
    const result = await con.query(sql, [postId]);
    return result[0];
}

async function updatePost(post) {
    const sql = `UPDATE posts SET title = ?, content = ? WHERE postId = ?`;
    await con.query(sql, [post.title, post.content, post.postId]);
    return post;
}

async function deletePost(postId) {
    const sql = `DELETE FROM posts WHERE postId = ?`;
    await con.query(sql, [postId]);
    return { success: true };
}

async function getUserPosts(userId) {
    const sql = `SELECT * FROM posts WHERE userId = ?`;
    const result = await con.query(sql, [userId]);
    return result;
}

module.exports = { 
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost,
    getUserPosts
}