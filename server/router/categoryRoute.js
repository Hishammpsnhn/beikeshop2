import express from 'express';
import { createCategory, getCategory, softDeleteCategory } from '../controller/categoryController.js';

const router = express.Router()

router.get('/',getCategory)
router.post('/',createCategory)
router.delete('/:id', softDeleteCategory)
export default router