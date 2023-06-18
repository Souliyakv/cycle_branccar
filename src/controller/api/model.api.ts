import { ModelEntity } from "../../config/db.config";

export class CreateModel {

    private modelName: string;
    private brandName: string;

    constructor() { }

    public Init(params: object): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                this.InitParms(params);
                const ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success') throw new Error(ValidateParams);

                const run = await this.CreateModel();
                if (run != 'success') throw new Error(run);
                resolve('success')

            } catch (error) {
                resolve(error.message);
            }
        })
    }

    private InitParms(params: any): void {
        this.brandName = params.brandName;
        this.modelName = params.modelName;
    }

    private ValidateParams(): string {
        if (!(this.brandName && this.modelName)) return 'invalid paramiter'
        return 'success'
    }

    private CreateModel(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                const data = {
                    brandName: this.brandName,
                    modelName: this.modelName
                }
                // console.log(`data`, data)
                const model = await ModelEntity.create(data);
                if (!model) return resolve('false');

                resolve('success');

            } catch (error) {
                resolve(error.message);
            }
        })
    }
}

export class UpdateModel {

    private modelName: string;
    private brandName: string;
    private id: number;
    private response: object;

    public Init(params: object): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
                if(ValidateParams != 'success') throw new Error(ValidateParams);

                const run = await this.UpdateModel();
                if(run != 'success') throw new Error(run);
                resolve(this.response);

            } catch (error) {
                resolve(error.message);
            }
        })
    }

    private InitParams(params: any): void {
        this.brandName = params.brandName;
        this.modelName = params.modelName;
        this.id = params.id;
    }

    private ValidateParams(): string {
        if (!(this.brandName && this.modelName && this.id)) return 'invalid paramiter'
        return 'success'
    }

    private UpdateModel(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                const values = {
                    modelName: this.modelName,
                    brandName: this.brandName,
                }

                const update = await ModelEntity.update(values, {
                    where: { id: this.id }
                });

                if (!update) return resolve('false');
                this.response = {
                    rows: {
                        modelName: this.modelName,
                        brandName: this.brandName,
                    },
                    message: 'success'
                }
                resolve('success');

            } catch (error) {
                resolve(error.message);
            }
        })
    }
}

export class GetAllModel {

    private response: object;

    constructor(){}

    public Init(): Promise<any> {
        return new Promise<any> (async(resolve, reject) => {
            try {

                const run = await this.AllModel();
                if(run != 'success') throw new Error(run);

                resolve(this.response);
                
            } catch (error) {
                resolve(error.message);
            }
        })
    }

    private AllModel():Promise<any> {
        return new Promise<any> (async (resolve, reject) => {
            try {
                
                const allModel = await ModelEntity.findAll({
                    where: {isShow: true}
                })
                if(!allModel) return resolve('model is empty');

                this.response = {
                    rows: allModel
                }

                // console.log(this.response);
                resolve('success')

            } catch (error) {
                resolve(error.message)
            }
        })
    }
}