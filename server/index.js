const express = require("express");
const session = require('express-session');
const account_db = require('./db/account_db')

const port = 3001;
const app = express();

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

app.use(allowCrossDomain);
app.use(express.json());


app.use(session({
    secret: 'chyingp', // 对session id 相关的cookie 进行签名
    resave: true,
    rolling: true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie: {
        maxAge: 1800000, // 设置 session 的有效时间，单位毫秒
        secure: false,
    },
}));


// app.get("/", (req, res) => res.send("Hello World!"))

// login
app.post("/signIn", (req, res) => {
    let { username, password } = req.body;

    if (req.session.nickname) {
        res.status(400).send({ user: 'logined' })
    }
    if (!username) {
        res.status(400).send({ user: 'invalid' });
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


// getUserInfo
app.get("/userInfo", (req, res) => {
    if (req.session.nickname) {
        account_db.getUserInfo({ name: req.session.nickname }).then(data => {
            res.send(data);
        }).catch(e => {
            res.status(e.code).send(e.error)
        })
    } else {
        res.status(401).send({ user: 'unlogined' })
    }

})


//regist
app.post("/register", (req, res) => {
    let { username } = req.body;

    if (req.session.nickname) {
        res.status(400).send({ user: 'logined' })
    } else {
        account_db.getUserInfo({ name: username }).then(data => {
            res.status(400).send({ user: 'exist' })
        }).catch(e => {
            account_db.addUser(req.body).then(data => {
                res.send(data)
            });
        })
    }

})


app.delete("/session", (req, res) => {
    delete req.session.nickname;
    res.send({});
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))