import connection from "../middleware/db.js";
import { TESTSQL } from "../model/test_model.js";

export const testController = (req,res)=>{
    try {
        connection.query(TESTSQL,(err,result)=>{
            if(err) throw err;
            return res.json(result);
        })
    } catch (error) {
        return console.log(error);
    }
}