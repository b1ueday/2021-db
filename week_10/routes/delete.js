import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();


//삭제기능 delete 페이지
router.get('/', async (req, res) => {
    const student = await selectSql.getStudent();
    res.render('delete', {
        title: "삭제기능",
        student
    })
});

router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn); //삭제 버튼을 누르면 해당 열의 Snumber를 가져온다.

    const data = {
        Snumber: req.body.delBtn
    }

    await deleteSql.deleteStudent(data); //delete함수 호출

    res.redirect('/delete');
});

module.exports = router;