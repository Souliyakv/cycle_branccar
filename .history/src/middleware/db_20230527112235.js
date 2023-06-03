import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config();
const connection = mysql.createConnection({
    host:'aws.connect.psdb.cloud',
    user:'3zair75946iee83xyt1r',
    password:'pscale_pw_plQ61C3bBAlJ22kUrQE0gQmQU1Xa3O2BGcUaYXT0mXI',
    database:'souliya_test',
    ssl:{}
})
connection.connect(function(err){
    if(err) {
        return console.log(err);
    }console.log("My sql connect")
 })

 export default connection;
 