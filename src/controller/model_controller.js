import connection from "../middleware/db.js";
import { ADDMODEL, FINDMODEL, SELEMODEL, SELEMODELADMIN, SHOWMODEL, UNSHOMODEL } from "../model/model_model.js";

export const findModelController = (req,res)=>{
    try {
        connection.query(FINDMODEL,(err,result)=>{
            if(err) throw err;
            return res.json(result)
        })
    } catch (error) {
        return console.log(error);
    }
}

export const addModelController = (req,res) =>{
    try {
        let {brandID,modelName} = req.body;
        let values = [[brandID,modelName]];
        connection.query(ADDMODEL,[values],(err,result)=>{
            if(err) throw err;
            return res.json(result);
        })
    } catch (error) {
        return console.log(error);
    }
}

export const selectModelController = (req,res) =>{
    try {
        let {brandID} = req.body;
        let values = [[brandID]];
        connection.query(SELEMODEL,[values],(err,result)=>{
            if(err) throw err;
            return res.json(result);
        })
    } catch (error) {
        return console.log(error)
    }
}


export const selectModelAdminController = (req,res) =>{
    try {
        let {brandID} = req.body;
        let values = [[brandID]];
        connection.query(SELEMODELADMIN,[values],(err,result)=>{
            if(err) throw err;
            return res.json(result);
        })
    } catch (error) {
        return console.log(error)
    }
}

export const showModelController = (req,res) =>{
    try {
        let {modelID} = req.body;
        let values = [[modelID]];
        connection.query(SHOWMODEL,[values],(err,result)=>{
            if(err) throw err;
            return res.json(result);
        })
    } catch (error) {
        return console.log(error)
    }
}


export const unShowModelController = (req,res) =>{
    try {
        let {modelID} = req.body;
        let values = [[modelID]];
        connection.query(UNSHOMODEL,[values],(err,result)=>{
            if(err) throw err;
            return res.json(result);
        })
    } catch (error) {
        return console.log(error)
    }
}