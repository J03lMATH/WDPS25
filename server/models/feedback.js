/* const feedbacks = [
    {
        username: "Joey",
        feedback: "Great service!"
    },
    {
        username: "JM15",
        feedback: "Very helpful!"
    }
];


const con = require('./db_connect.js');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS feedbacks (
        feedbackId INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        feedback TEXT NOT NULL
    )`;
    await con.query(sql);
}
createTable();

async function getAllFB(){
    let sql = `SELECT * FROM Feedback`;
    return await con.query(sql);
}

async function addFeedback(feedback) {
    let sql = `INSERT INTO feedbacks (username, feedback) VALUES (?, ?)`;
    return await con.query(sql, [feedback.username, feedback.feedback]);
}

module.exports = {  getAllFB, addFeedback };*/