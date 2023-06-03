import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config();
const connection = mysql.createConnection(process.env.DATABASE_URL)
connection.connect(function(err){
    if(err) {
        return console.log(err);
    }console.log("My sql connect")
 })

 export default connection;
 