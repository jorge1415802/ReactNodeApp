const mysql = require('mysql');
const {database} = require('./db');
const {promisify} = require('util');

const pool = mysql.createPool(database);
pool.getConnection((err,connection)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST')
            console.log('The connetion was closed');
        if(err.code === 'ER_CON_COUNT_ERROR')
            console.log('Database has too many connections');
        if(err.code === 'ECONNREFUSED')
            console.log('database connetion was refused');        
    }
    if(connection)
        connection.release();
    console.log('Db connected');
    return;     
});

pool.query = promisify(pool.query);

module.exports = pool;