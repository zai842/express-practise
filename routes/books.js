import express from 'express';
import { creatBook, deleteBook, getBook, getBooks, patchBook } from "../controller/books.js";
const router = express.Router();

router.get('/', getBooks);
router.post('/', creatBook);
router.get('/:id', getBook);
router.delete('/:id', deleteBook);
router.patch('/:id', patchBook);

export default router;