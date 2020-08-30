module.exports = {
    database:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'play',
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }

    }
};