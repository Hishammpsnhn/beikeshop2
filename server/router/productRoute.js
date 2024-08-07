import express from 'express';
import {addProduct,getAllProducts, softDeleteProduct,getProduct, editProduct} from '../controller/productControllers.js'

const router = express.Router()


router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', editProduct);
router.delete('/:id', softDeleteProduct);
export default router