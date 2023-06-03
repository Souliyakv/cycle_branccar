import { dbConnection } from "../config/db.config.js";
import connection from "../middleware/db.js";
import { FINDBRAND, FINDBRANDADMIN, INSERTBRAND, SHOWBRAND, UNSHOWBRAND } from "../model/brand_model.js";


export const findBrandController = (req,res) =>{
    try {
        
        dbConnection.query(FINDBRAND,(err,result)=>{
            console.log(result);
            return res.json(result)
        })
    } catch (error) {
        return console.log(error);
    }
}

export const findBrandAdminController = (req,res) =>{
    try {
        connection.query(FINDBRANDADMIN,(err,result)=>{
            return res.json({
                data:result,
                count:result.length
            })
        })
    } catch (error) {
        return console.log(error);
    }
}


export const addBrandController = (req,res) =>{
    try {
        let {brandName} = req.body;
        let values = [[brandName]];
       
        dbConnection.query(INSERTBRAND,[values],(err,result)=>{
            if(err) throw err;
            return res.json({
                msg:result
            })
        })
    } catch (error) {
       return console.log(error);
    }
}

export const showBrandController = (req,res) =>{
    try {
        let {brandID} = req.body;
        let values = [[brandID]];
        connection.query(SHOWBRAND,[values],(err,result)=>{
            if(err) throw err;
            return res.json(result)
        })
    } catch (error) {
       return console.log(error);
    }
}


export const unShowBrandController = (req,res) =>{
    try {
        let {brandID} = req.body;
        let values = [[brandID]];
        connection.query(UNSHOWBRAND,[values],(err,result)=>{
            if(err) throw err;
            return res.json({
                msg:result
            })
        })
    } catch (error) {
       return console.log(error);
    }
}