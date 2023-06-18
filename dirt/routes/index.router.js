"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const brand_controller_1 = require("../controller/brand.controller");
// import { UserController } from "../controller/user.controller";
const model_controller_1 = require("../controller/model.controller");
class routes {
    constructor(router) {
        this.brandCotroller = new brand_controller_1.BrandController();
        // this.userController = new UserController();
        this.modelController = new model_controller_1.ModelController();
        //--------------Brand---------------
        router.post("/brand/create", this.brandCotroller.Insert.bind(this.brandCotroller));
        router.post("/brand/update", this.brandCotroller.Update.bind(this.brandCotroller));
        router.post("/brand/all", this.brandCotroller.AllBrand.bind(this.brandCotroller));
        //--------------User---------------
        // router.post("/user/create", this.userController.Insert.bind(this.userController));
        // router.post("/user/login", this.userController.Login.bind(this.userController));
        //--------------Model--------------
        router.post("/model/create", this.modelController.Create.bind(this.modelController));
        router.post("/model/update", this.modelController.Update.bind(this.modelController));
        router.post("/model/all", this.modelController.GetAll.bind(this.modelController));
        // router.post("/model/test", APIAccess);
    }
}
exports.routes = routes;
