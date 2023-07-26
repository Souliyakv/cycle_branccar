import sequelize from "sequelize";

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./gbKay"
import { BrandFactory } from "../model/brand.model";
import { ModelFactory } from "../model/model.model";
import { UserFactory } from "../model/user.model";

const db_port = DB_PORT as unknown as number

export const dbConnnection = new sequelize.Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        port: db_port,
        dialect: 'postgres'
    }
)

dbConnnection.sync({alter: true});

export let BrandEntity = BrandFactory('brand', dbConnnection);
export let ModelEntity = ModelFactory('model', dbConnnection);
export let UserEntity = UserFactory('user', dbConnnection);

BrandEntity.sync();
ModelEntity.sync();
UserEntity.sync();


