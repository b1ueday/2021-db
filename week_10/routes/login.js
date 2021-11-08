import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body; //입력받은 값 저장
    const users = await selectSql.getUsers(); //get 함수 호출
    let whoAmI = ''
    let checkLogin = false;

    users.map((user) => {
        if (vars.id === user.Id && vars.password === user.Password) {
            console.log('login success!'); //아이디 비밀번호가 일치하는 경우 로그인
            checkLogin = true;
            if (vars.id === 'admin') { 
                whoAmI = 'admin';
            } else {
                whoAmI = 'users';
            }
        }
    })

    if (checkLogin && whoAmI === 'admin') { //아이디가 admin인 경우 delete 페이지
        res.redirect('/delete');
    } else if (checkLogin && whoAmI === 'users') { //user인 경우 select 페이지
        res.redirect('/select');
    } else {
        console.log('login falied!'); //둘 모두 아닌 경우 로그인 실패
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }

})

module.exports = router;