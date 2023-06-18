import { Request, Response } from "express"; 
import { AddUser, Login } from "./api/user.api";
import { Res_Client } from "../services/response";

export class UserController {
    
    constructor(){}

    public Insert(req: Request, res: Response): Promise<any> {
        return new Promise<any> (async (resolve, reject) => {
            try {
                
                let params = req.body;
                const func = new AddUser();
                func.Init(params).then(run => {
                    if( run != 'success') throw new Error(run);
                    Res_Client(run, 'success', 200, res);
                }).catch(error => Res_Client([], error.message, 400, res));

            } catch (error) {
                resolve('success')
            }
        })
    }

    public Login(req: Request, res: Response): Promise<any> {
        return new  Promise<any> (async (resolve, reject) => {
            try {

                let params = req.body;
                const func = new Login();
                func.Init(params).then(run =>{
                    if(!run) throw new Error(run);
                    Res_Client(run, 'success', 200, res);
                }).catch(error => Res_Client([], 'username or password invalid', 200, res));
                
            } catch (error) {
                resolve(error.meassage);
            }
        }) 
    }
}