const users = [
    {
        userId: 123,
        username: "JM15",
        email: "joel04mathew@gmail.com",
        fName: "Joel",
        lName: "Mathew",
        password: "coolPass",
    },
    {
        userId: 132,
        username: "Joey",
        email: "joeDane@gmail.com",
        fName: "Joe",
        lName: "Dane",
        password: "12345831",
    }
];

//fuction to fet all our Users
let getAllUsers = () => users;

module.exports = { getAllUsers };