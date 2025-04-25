// const users = [
//     {
//         userId: 123,
//         username: "JM15",
//         email: "joel04mathew@gmail.com",
//         fName: "Joel",
//         lName: "Mathew",
//         password: "coolPass",
//     },
//     {
//         userId: 132,
//         username: "Joey",
//         email: "joeDane@gmail.com",
//         fName: "Joe",
//         lName: "Dane",
//         password: "12345831",
//     }
// ];

const con = require('./db_connect.js');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS users (
        userId INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        fName VARCHAR(255) NOT NULL,
        lName VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )`;
    await con.query(sql);
}
createTable();


async function getAllUsers(){
    let sql = `SELECT * FROM User`;
    return await con.query(sql);
}

const user = {
    username: "bobbyBoy",
    email: "bob@gmail.com",
    fName: "Bob",
    lName: "Bobson",
    password: "bobcool"
}

//Login a user
async function login(user){
    let cUser = await userExists(user.username);
    if(!cIser[0]){
        throw Error ("User does not exist");
    }
    if(cUser[0].password !== user.password){
        throw Error ("Password is incorrect");
    }

    return cUser[0];
}



module.exports = { getAllUsers, login };