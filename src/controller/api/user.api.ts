import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserEntity } from "../../config/db.config";

import { IKeys } from "../../model/base.model";
import { Gensalt } from "../../services/base.service";


export class AddUser {

    private username: string;
    private password: string;
    private phonenumber: string;

    constructor() { }

    public Init(params: any): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success') throw new Error(ValidateParams);

                const run = await this.Insert();
                if (run != 'success') throw new Error(run);

                resolve('success')

            } catch (error) {
                resolve(error.meassage);
            }
        })
    }

    private InitParams(params: any): void {
        this.username = params.username;
        this.password = params.password;
        this.phonenumber = params.phonenumber;
    }

    private ValidateParams(): string {
        if (!(this.username && this.password && this.phonenumber)) return 'invalid paramiter'
        return 'success'
    }

    private Insert(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {


                let data = {
                    username: this.username,
                    // password: await bcrypt.hash(this.password, 5),
                    password: '',
                    phonenumber: this.phonenumber
                }

                const str = this.phonenumber + this.password;
                // console.log(`str add`, str);
                const encrypt = bcrypt.hashSync(str, bcrypt.genSaltSync());
                data.password = encrypt;

                const run = await UserEntity.create(data);
                if (!run) return resolve('false')

                resolve('success')

            } catch (error) {
                resolve(error.message);
            }
        })
    }
}

export class Login {

    private username: string;
    private password: string;
    private response: any;

    constructor() { }

    public Init(params: any): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                this.InitParams(params);
                const ValidateParams = this.ValidateParams();
                if (ValidateParams != 'success') throw new Error(ValidateParams);

                const run = await this.Login();
                // console.log(`run`, run)
                if (run != 'success') throw new Error(run);
                resolve(this.response)

            } catch (error) {
                resolve(error.message);
            }
        })
    }

    private InitParams(params: any): void {
        this.username = params.username;
        this.password = params.password;
    }

    private ValidateParams(): string {
        if (!(this.username && this.password)) return 'invalid paramiter'
        return 'success'
    }

    private Login(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            try {

                let user = await UserEntity.findOne({
                    where: { username: this.username }
                });
                user = JSON.parse(JSON.stringify(user));
                // console.log(user.phonenumber);

                if (!user) return resolve('username incorrect')

                const str = user.phonenumber + this.password;

                const validator = bcrypt.compareSync(str, user.password);
                if (!validator) return resolve('password incorrect');

                let tokenmodel = {
                    username: this.username,
                    salt: ""
                }

                tokenmodel.salt = Gensalt(user.username);

                // console.log(tokenmodel)
                await UserEntity.update({ phonenumber: tokenmodel.salt }, {
                    where: {
                          id: user.id
                    }
                });

                const token = jwt.sign(tokenmodel, IKeys.jwtkey, { expiresIn: '3d' });

                this.response = {
                    token: token
                }
                resolve('success')

            } catch (error) {
                resolve(error.message)
            }
        })
    }
}