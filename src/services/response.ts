import { Response } from "express";

export const Res_Client = (data: any, message: string, status: number, res: Response) => {
    res.send({data: data, message: message, ststus: status});
}
