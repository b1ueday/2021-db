import express from "express";
import { selectSql } from "../database/sql"; //selectSql 파일 가져오기

const router = express.Router(); //라우터

//select를 통해서 입력한 값들을 불러와서 볼 수 있게 한다.

router.get('/', async function(req, res) {
    const student = await selectSql.getStudent(); //get함수 호출

    res.render('select', {
        title: '학생',
        student
    });
});

module.exports = router;