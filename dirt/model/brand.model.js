"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandFactory = void 0;
const sequelize_1 = require("sequelize");
const BrandFactory = (name, con) => {
    const attribute = {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brandName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        isShow: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
        },
    };
    return con.define(name, attribute, { tableName: name, freezeTableName: true, timestamps: true });
};
exports.BrandFactory = BrandFactory;
