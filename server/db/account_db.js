
const getConnection = require('./index');
let db = getConnection();

// function addConsume() {

// }

function getUserInfo(params) {
    const query = `select * from user where name = '${params.name}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, data) => {
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
    const query = `insert into user (name,password) values ('${data.username}','${data.password}')`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, data) => {
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