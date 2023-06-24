import express from 'express'
import { addBrandController, findBrandAdminController, findBrandController, showBrandController, unShowBrandController } from '../controller/brand_controller.js';
import { testController } from '../controller/test_controller.js';
import { addModelController, findModelController, selectModelAdminController, selectModelController, showModelController, unShowModelController } from '../controller/model_controller.js';
const router = express.Router();

router.get('/findBrand',findBrandController)
router.get('/findBrandAdmin',findBrandAdminController)

router.post('/addBrand',addBrandController)
router.get('/test',testController),
router.get('/findModel',findModelController)
router.post('/addModel',addModelController)
router.post('/selectModel',selectModelController)
router.post('/selectModelAdmin',selectModelAdminController)
router.post('/showBrand',showBrandController)
router.post('/unShowBrand',unShowBrandController)
router.post('/showModel',showModelController)
router.post('/unShowModel',unShowModelController)




export default router;