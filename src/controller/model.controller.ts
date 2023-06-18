import { Request, Response } from "express";
import { Res_Client } from "../services/response";
import { CreateModel, GetAllModel, UpdateModel } from "./api/model.api";

export class ModelController {
    constructor() { }

    public Create(req: Request, res: Response): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                let params = req.body;
                const func = new CreateModel();
                func.Init(params).then(run => {
                    // console.log(`run`, run)
                    if (run != 'success') throw new Error(run);
                    Res_Client([], 'success', 200, res);
                }).catch(error => Res_Client([], error.message, 400, res));

            } catch (error) {
                resolve(error.message);
            }
        })
    }

    public Update(req: Request, res: Response): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                let params = req.body;
                const func = new UpdateModel();
                func.Init(params).then(run => {
                    if (!run) throw new Error(run);
                    Res_Client(run.rows, 'success', 200, res);
                }).catch(error => Res_Client([], error.message, 400, res))

            } catch (error) {
                resolve(error.mesage)
            }
        })
    }

    public GetAll(req: Request, res: Response): Promise<any> {
        return new Promise<any> (async (resolve, reject)=>{
            try {

                const func = new GetAllModel();
                func.Init().then(run => {
                    if(!run) throw new Error(run);
                    Res_Client(run, 'success', 200, res);
                }).catch(error => Res_Client([], error.mesage, 200, res));
                
            } catch (error) {
                resolve(error.mesage)
            }
        })
    }
}