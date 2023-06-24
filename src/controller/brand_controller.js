import connection from "../middleware/db.js";
import { FINDBRAND, FINDBRANDADMIN, INSERTBRAND, SHOWBRAND, UNSHOWBRAND } from "../model/brand_model.js";


export const findBrandController = (req,res) =>{
    try {
        connection.query(FINDBRAND,(err,result)=>{
            return res.json(result)
        })
    } catch (error) {
        return console.log(error);
    }
}

export const findBrandAdminController = (req,res) =>{
    try {
        connection.query(FINDBRANDADMIN,(err,result)=>{
            return res.json(result)
        })
    } catch (error) {
        return console.log(error);
    }
}


export const addBrandController = (req,res) =>{
    try {
        let {brandName} = req.body;
        let values = [[brandName]];
        connection.query(INSERTBRAND,[values],(err,result)=>{
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