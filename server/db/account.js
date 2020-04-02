
const mysql = require('mysql');
const mysqlConfig = require('../config/db');

let db = mysql.createConnection(mysqlConfig);

// function addConsume() {

// }

function getUserInfo(params) {
    return new Promise((resolve, reject) => {
        db.query(`select * from user where name = '${params.name}'`, (err, data) => {
            if (err) {
                reject({ code: 400, error: err })
            } else if (data) {
                if (data.length) {
                    resolve(data[0]);
                } else {
                    reject({ code: 404, error: { user: 'not_found' } })
                }
            }
        })
    })
}

function addUser(data) {
    return new Promise((resolve, reject) => {
        db.query(`insert into user (name,password) values ('${data.username}','${data.password}')`, (err, data) => {
            if (err) {
                reject({ code: 400, error: err })
            } else if (data) {
                resolve(data);
            }
        })
    })
}

module.exports = {
    getUserInfo,
    addUser,
}