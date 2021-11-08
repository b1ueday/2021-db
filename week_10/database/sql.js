import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'sql938271',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

//select문
export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        console.log(rows)
        return rows
    },
    getStudent : async () => { //sql에서 student select
        const [rows] = await promisePool.query(`select * from student`);
        return rows
    }, 
}


export const deleteSql = {

    deleteStudent : async (data) => { //입력받은 값과 Snumber 일치하는 경우 해당 열 삭제
        console.log('deleteSql.deleteStudent:', data.Snumber);
        const sql = `delete from student where Snumber = "${data.Snumber}"`;
        await promisePool.query(sql);
    },
}