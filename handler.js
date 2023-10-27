import mysql from 'mysql';

let connection = mysql.createConnection({ // creating database connection
    host     : 'database-1.cwqd4lkjctlx.eu-north-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'adminadmin',
    database : 'dw1'
})


export const handler = () => {

    return 'Hello World'
}