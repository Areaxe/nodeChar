const express = require("express");
const session = require('express-session');

const app = express();
app.use(express.json());
const port = 3001;

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

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
    res.send(req.body);
    req.session.username = 'ssss';
})
app.get("/userInfo", (req, res) => {
    console.log(req.session);
    if (req.session.username) {
        res.send({ username: 'username' });
    } else {
        res.status(400).send({ error: 'unlogined' })
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))