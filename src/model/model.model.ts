import { BuildOptions, DataTypes, Model, Sequelize, ModelAttributes } from "sequelize";
import { Ibase } from "./base.model";

interface IModel extends Ibase {
    
    modelName: string,

}

export interface Model_Attributes extends IModel {}
export interface ModelModel extends Model<ModelAttributes>, Model_Attributes{}
export type ModelStatic = typeof Model & {new (object?: true, option?: BuildOptions): ModelModel};

export const ModelFactory = (name: string, con: Sequelize) => {
    const attribute: ModelAttributes<ModelModel> = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        brandName:{ // Repleac with brandName
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isShow: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }

    return con.define(name, attribute, {tableName: name, freezeTableName: true, timestamps: true});
}
