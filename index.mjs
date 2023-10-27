import mysql from 'mysql';

let connection = mysql.createConnection({ // creating database connection
    host     : 'rds-proxy.proxy-cwqd4lkjctlx.eu-north-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'adminadmin',
    database : 'dw1'
})

connection.connect();

export const handler = () => {

    connection.query('SELECT * FROM news', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);

        connection.end();
    });



    console.log('Hello world!!!');

    let jsonResponse = {"hello":"world"}
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(jsonResponse),
    };
    return response;
}