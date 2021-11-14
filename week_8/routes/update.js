import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

//employee 업데이트 페이지
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

//department 업데이트 페이지
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    })
});

//salary를 업데이트하고 select 페이지로 돌아감
router.post('/employee', async (req, res) => {
    const vars = req.body;
    console.log(vars.salary);

    const data = {
        Salary: vars.salary
    }

    await updateSql.updateEmployee(data);
    res.redirect('/select');
});

//dname을 받아와서 업데이트 하고 select 페이지로 돌아감
router.post('/department', async (req, res) => {
    const vars = req.body;
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data);

    res.redirect('/select');
});

module.exports = router;