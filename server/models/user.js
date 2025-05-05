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

/*
const user = {
    username: "bobbyBoy",
    email: "bob@gmail.com",
    fName: "Bob",
    lName: "Bobson",
    password: "bobcool"
}*/

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


async function getUser(user){
    let sql;
    if(user.userId){
        sql = `SELECT * FROM users WHERE userId =${user.userId}`;
    }
    else {
        sql = `SELECT * FROM users WHERE username = "${user.username}"`;
    }

    return await con.query(sql);
}

async function register(user){
    const cUser = await userExists(user.Username)
   if(cUser.length > 0) {
    throw Error("Username already in use!")
   }
 
   let sql = `
     INSERT INTO User(password, username, email, firstName, lastName)
     VALUES("${user.Password}", "${user.Username}", "${user.Email}", "${user.FirstName}", "${user.LastName}")
   `
   await con.query(sql)
 
   return await login(user)
}

async function editUsername(user){
    let sql = `UPDATE users SET username = "${user.username}" WHERE userId = ${user.userId}`;
    await con.query(sql);
    const cUser = await userExists(user.username)
    return cUser[0]
}

async function deleteAccount(userId){
    let sql = `DELETE FROM users WHERE userId = ${userId}`;
    await con.query(sql);
}

module.exports = { getAllUsers, login, getUser, register, editUsername, deleteAccount };