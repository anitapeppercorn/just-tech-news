const { User } = require('../models');

const userData = [
    {
        username: "sithysithbeans",
        email: "sithysithbeans@gmail.com",
        password: "sithy"
    },
    {
        username: "darthvader",
        email: "darthvader@gmail.com",
        password: "darth"
    },
    {
        username: "darthymaul",
        email: "darthymaul@gmail.com",
        password: "darthy"
    },
    {
        username: "emperorpalpatine",
        email: "emperorpalpatine@gmail.com",
        password: "emperor"
    },
    {
        username: "anitapeppercorn",
        email: "anita@peppercorn.ai",
        password: "anita"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;