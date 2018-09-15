const fs = require('fs');

module.exports = {
    development: {
        username: process.env.DEVELOPMENT_USERNAME,
        password: process.env.DEVELOPMENT_PASSWORD,
        database: process.env.DEVELOPMENT_DATABASE,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: process.env.TEST_USERNAME,
        password: process.env.TEST_PASSWORD,
        database: process.env.TEST_DATABASE,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
};