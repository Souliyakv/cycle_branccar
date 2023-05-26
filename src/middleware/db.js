import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config();
const connection = mysql.createConnection({
    host:'aws.connect.psdb.cloud',
    user:'mkv258ac4evpa2ebinwz',
    password:'pscale_pw_DOPkgQOwOAZ0QR3zkNEhEX98mkfMNg83DSbWTGAXkuq',
    database:'souliya_test',
    ssl:{"rejectUnauthorized":true}
})
connection.connect(function(err){
    if(err) {
        return console.log(err);
    }console.log("My sql connect")
 })

 export default connection;
 