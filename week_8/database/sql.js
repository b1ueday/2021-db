import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'sql938271',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

//select문
export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        return rows
    },
}

//웹에서 insert 할 수 있게 한다.
export const insertSql = {
    setEmployee : async (data) => { //data를 받아온다.
        const sql = `insert into employee values ( 
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
        
            await promisePool.query(sql); //query 실행
    },

    setDepartment : async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
        
            await promisePool.query(sql);
    },
}

//update의 조건문
export const updateSql = {
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        await promisePool.query(sql);
    },
    updateEmployee : async (data) => {
        const sql = `update employee set salary = "${data.Salary}" where Minit = "M"`;
        await promisePool.query(sql);
    },
}