"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const sequelize_1 = require("sequelize");
const UserFactory = (name, con) => {
    const attribute = {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phonenumber: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: 'admin'
        }
    };
    return con.define(name, attribute, { tableName: name, freezeTableName: true, timestamps: true });
};
exports.UserFactory = UserFactory;
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
