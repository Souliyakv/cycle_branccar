import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Res_Client } from "./response";
import { IKeys } from "../model/base.model";


export const APIAccess = (req: Request, res: Response, next: NextFunction) => {

try {

    const token = req.headers['token']+'';
    if(!token) return Res_Client([], 'invalid token', 401, res);

    const validator: any = jwt.verify(token, IKeys.jwtkey);
    if (!validator) return Res_Client([], 'token br thuek', 401, res);
    console.log(`validator`, validator);

    next();
    
} catch (error) {
    Res_Client([], error.message, 500, res);
}
}