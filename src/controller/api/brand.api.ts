import { isThisTypeNode } from "typescript";
import { BrandEntity } from "../../config/db.config";

export class CreateBrand {

    private brandName: string;

    constructor() {}

    public Init(params: any): Promise<any> {
        return new Promise<any> (async (resolve, reject) => {
            try {
                
                this.InitParams(params);
                let ValidateParams = this.ValidateParams();
                if(ValidateParams != 'success') throw new Error(ValidateParams);
                
                const run = await this.Insert();
                if(run != 'success') throw new Error(run)

                resolve('success')

            } catch (error) {
                resolve(error.meassage)
            }
        })
    }

    private InitParams(params: any): void{
        this.brandName = params.brandName;
    }

    private ValidateParams(): string{
        if(!(this.brandName)) return 'paramiter invalid';
        return 'success'
    }

    private Insert(): Promise<any> {
        return new Promise<any> (async(resolve, reject) => {
            try {
                
                const data = {
                    brandName: this.brandName
                }
                const run = await BrandEntity.create(data);
                if(!run) return resolve('false')

                resolve('success')

            } catch (error) {
                resolve(error.meassage);
            }
        })
    }
}

export class  UpdateBrand{
    private brandName: string;
    private id: number;
    private response: object;

    constructor (){}

    public Init(params: any): Promise<any> {
        return new Promise<any> (async (resolve, reject) => {
            try {

                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
                if(ValidateParams != 'success') throw new Error(ValidateParams);

                const run = await this.Update();
                if(run != "success") throw new  Error(run);

                resolve(this.response);
                
            } catch (error) {
                resolve(error.meassage);
            }
        })
    }

    private InitParams(params: any): void{
        this.brandName = params.brandName;
        this.id = params.id;
    }

    private ValidateParams():string{
        if(!(this.brandName && this.id)) return 'invalid paramiter'
        return 'success'
    }

    private Update(): Promise<any> {
        return new Promise<any> (async(resolve, reject) => {
            try {
                // const values = {
                //     brandName: this.brandname
                // };
                
                const update = await BrandEntity.update({brandName: this.brandName},{
                    where:{id: this.id}
                });
                // console.log(`update`, update)
                if(!update) return resolve('false');
                this.response = {
                    rows: this.brandName,
                    message: 'success'
                };

                resolve('success');
            } catch (error) {
                resolve(error.meassage)
            }
        })
    }
}

export class GetallBrand{
    
    private response: object;

    constructor(){}

    public Init(): Promise<any> {
        return new Promise<any> (async(resolve, reject) => {
            try {

                const run = await this.GetAll()
                if(run != 'success') throw new Error(run);
                resolve(this.response)
                
            } catch (error) {
                resolve(error.meassage)
            }
        })
    }

    private GetAll(): Promise<any> {
        return new Promise<any> (async(resolve, reject) => {
            try {
                
                const allBrand = await BrandEntity.findAll({
                    attributes: ['id', 'brandName'],
                    where:{
                        isShow: true
                    }
                })

                if(!allBrand) return resolve('false');
                this.response = {
                    rows: allBrand,
                    message: 'success'
                };

                resolve('success');

            } catch (error) {
                resolve(error.meassage)
            }
        })
    }
}