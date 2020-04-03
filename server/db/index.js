const mysql = require('mysql');
const mysqlConfig = require('../config/db_config');

// let db = mysql.createConnection(mysqlConfig);

function getConnection(){
    let db = null;
    if(!db){
        return db = mysql.createConnection(mysqlConfig);
    }else{
        return db;
    }
}
module.exports = getConnection;