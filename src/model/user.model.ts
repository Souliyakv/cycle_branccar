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
        }
    }

    return con.define(name, attribute, {tableName: name, freezeTableName: true, timestamps: true});
}



// User.beforeCreate(function(user, options) {
//     return cryptPassword(user.password)
//       .then(success => {
//         user.password = success;
//       })
//       .catch(err => {
//         if (err) console.log(err);
//       });
//   });

// function cryptPassword(password) {
//   console.log("cryptPassword" + password);
//   return new Promise(function(resolve, reject) {
//     bcrypt.genSalt(10, function(err, salt) {
//       // Encrypt password using bycrpt module
//       if (err) return reject(err);

//       bcrypt.hash(password, salt, null, function(err, hash) {
//         if (err) return reject(err);
//         return resolve(hash);
//       });
//     });
//   });