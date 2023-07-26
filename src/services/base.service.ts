import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Res_Client } from "./response";
import { IKeys } from "../model/base.model";
import crypto from "crypto";
import { UserEntity } from "../config/db.config";
import { STRING } from "sequelize";


export const APIAccess = async (req: Request, res: Response, next: NextFunction) => {
    try {
    
        //req.query['x'];
        //req.params['x'];// url/x/y/
        const token = req.headers['token']+'';
        if(!token) return Res_Client([], 'invalid token', 401, res);
    
        const validator: any = jwt.verify(token, IKeys.jwtkey);
        if (!validator) return Res_Client([], 'token br thuek', 401, res);
        console.log(`validator`, validator);
        // const user = await UserEntity.findOne()
        let user = await UserEntity.findOne({
            where: { phonenumber: validator.salt }
        });

        if(!user) return Res_Client([], 'not found user', 404, res);

        user = JSON.parse(JSON.stringify(user));
        if(user.username != 'la') return Res_Client([], 'unauthorization', 400, res);
    
        next();
        
    } catch (error) {
        Res_Client([], error.message, 500, res);
    }
}

export const Gensalt = (username: string): string => {
    let salt = crypto.pbkdf2Sync(username, "abc", 100, 32,`sha512`).toString('hex')
    return salt
}