import express from "express";
import logger from "morgan";
import path from "path";

import loginRouter from "../routes/login"; //상위 폴더로 가서 각각 기능을 가져온다
import deleteRouter from "../routes/delete";
import selectRouter from "../routes/select";

const PORT = 13488; //포트 설정

const app = express(); //express 기능 사용

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', loginRouter); //홈 화면
app.use('/delete', deleteRouter); //delete 화면
app.use('/select', selectRouter); //select 화면

   app.listen(PORT, () => { //서버 실행
       console.log(`Example app listening at http://localhost:${PORT}`)
   })