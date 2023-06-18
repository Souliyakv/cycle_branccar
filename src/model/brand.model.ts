import {BuildOptions, DataTypes, Model, ModelAttributes, Sequelize} from "sequelize";
import { Ibase } from "./base.model";


interface IBrand extends Ibase {
    
    brandName: string,

}

export interface BrandAttribute extends IBrand {}
export interface BrandModel extends Model<BrandAttribute>, BrandAttribute {}
export type BrandStatic = typeof Model & {new (object?: object, option?: BuildOptions): BrandModel}


export const BrandFactory = (name: string, con: Sequelize) => {
    const attribute: ModelAttributes<BrandModel> = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brandName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        isShow: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    }

    return con.define(name, attribute, {tableName: name, freezeTableName: true, timestamps: true});
}