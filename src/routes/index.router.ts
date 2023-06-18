import { Router } from "express";
import { BrandController } from "../controller/brand.controller";
// import { UserController } from "../controller/user.controller";
import { ModelController } from "../controller/model.controller";


export class routes{

    private brandCotroller: BrandController; 
    // private userController: UserController;
    private modelController: ModelController;

    constructor(router: Router) {

        this.brandCotroller = new BrandController();
        // this.userController = new UserController();
        this.modelController = new ModelController();

        //--------------Brand---------------
        router.post("/brand/create",this.brandCotroller.Insert.bind(this.brandCotroller));
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