import express from 'express';
import {addProduct,getAllProducts, softDeleteProduct} from '../controller/productControllers.js'

const router = express.Router()

router.get('/',getAllProducts)
router.post('/:id', addProduct)
router.delete('/:id', softDeleteProduct)

export default router