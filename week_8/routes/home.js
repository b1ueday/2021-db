import express from "express";
import { insertSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

//입력받은 값을 각각에 할당한다.
router.post('/', (req, res) => {
    const vars = req.body; //여기에 저장된다
    const var_lenth = Object.keys(req.body).length; //데이터의 길이 측정

    if (var_lenth > 4) { //4보다 크면 employee
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/'); //새로고침 
})

module.exports = router;