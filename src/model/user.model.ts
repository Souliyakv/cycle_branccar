import { BuildOptions, DataTypes, Model, ModelAttributes, Sequelize } from "sequelize";
import { Ibase } from "./base.model";

interface IUser extends Ibase {

    username: string;
    password: string;
    phonenumber: string;

}

export interface UserAttribute extends IUser {}
export interface UserModel extends Model<UserAttribute>, UserAttribute{}
export type Userstatic = typeof Model & {new (object?: object, option?: BuildOptions): UserModel};

export const UserFactory = (name: string, con: Sequelize) => {
    const attribute: ModelAttributes<UserModel> = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phonenumber:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type: DataTypes.STRING,
            defaultValue: 'admin'
        },
        iden: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
    }

    return con.define(name, attribute, {tableName: name, freezeTableName: true, timestamps: true});
}

