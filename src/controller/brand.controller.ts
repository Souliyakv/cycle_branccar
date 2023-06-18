import { Request, Response } from "express";
import { CreateBrand, GetallBrand, UpdateBrand } from "./api/brand.api";
import { Res_Client } from "../services/response";


export class BrandController {

    constructor() { }

    public Insert(req: Request, res: Response): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                let params = req.body;
                let func = new CreateBrand();
                func.Init(params).then(run => {
                    if (run != 'success') throw new Error(run);
                    Res_Client(run, 'success', 200, res);
                }).catch(error => Res_Client([], error.message, 400, res));

                resolve('success');
            } catch (error) {
                resolve(error.meassage);
            }
        })
    }

    public Update(req: Request, res: Response): Promise<any> {
        return new Promise<any> (async (resolve, reject) => {
            try {
                
                let params = req.body;
                const func = new UpdateBrand();
                func.Init(params).then(run => {
                    // console.log(`run`,run)
                    if(run.message != 'success') throw new Error(run);
                    Res_Client(run.rows, 'success', 200, res);
                }).catch(error => Res_Client([], error.meassage, 200, res));

            } catch (error) {
                resolve(error.meassage);
            }
        })
    }

    public AllBrand(req: Request, res: Response): Promise<any> {
        return new Promise<any> (async (resolve, reject) => {
            try {
                
                const func = new GetallBrand();
                func.Init().then(run => {
                    if(run.message != 'success') throw new Error(run);
                    Res_Client(run.rows, 'success', 200, res);
                }).catch(error => Res_Client([], 'brand is emptry', 200, res));
                
            } catch (error) {
                resolve(error.message)
            }
        })
    }

}