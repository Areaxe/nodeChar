const express = require("express");
const session = require('express-session');
const account_db = require('./db/account')

const port = 3001;
const app = express();

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

app.use(allowCrossDomain);
app.use(express.json());


app.use(session({
    secret: 'secret', // 对session id 相关的cookie 进行签名
    resave: true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie: {
        maxAge: 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));


app.get("/", (req, res) => res.send("Hello World!"))


app.post("/signIn", (req, res) => {
    let { username, password } = req.body;
    if (req.session.nickname) {
        res.status(400).send({ user: 'logined' })
    }
    account_db.getUserInfo({ name: username }).then(data => {
        if (data.password !== password) {
            res.status(400).send({ password: 'invalid' });
            return;
        }
        req.session.nickname = req.body.username;
        res.send(data);
    }).catch(e => {
        res.status(e.code).send(e.error)
    })
})


app.get("/userInfo", (req, res) => {
    if (req.session.nickname) {
        account_db.getUserInfo({ name: req.session.nickname }).then(data => {
            res.send(data);
        }).catch(e => {
            res.status(e.code).send(e.error)
        })
    } else {
        res.status(400).send({ error: 'unlogined' })
    }
})

app.post("/register", (req, res) => {
    let { username } = req.body;
    if (req.session.nickname) {
        res.status(400).send({ user: 'logined' })
    } else {
        account_db.getUserInfo({ name: username }).then(data => {
            if (data) {
                res.status(400).send({ user: 'exist' })
            }
        }).catch(e => {
            account_db.addUser(req.body).then(data => {
                res.send(data)
            });
        })
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))