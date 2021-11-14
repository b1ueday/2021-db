import express from "express";
import { selectSql } from "../database/sql"; //selectSql 파일 가져오기

const router = express.Router(); //라우터

//select를 통해서 입력한 값들을 불러와서 볼 수 있게 한다.
router.get('/', async function(req, res) {
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;