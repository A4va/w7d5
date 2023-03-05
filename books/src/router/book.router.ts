import { Router } from "express";
import book from "../controller/book";
import validate from '../middleware/validate'
import { bookCheck } from "../zod.schema/zod.book";

const router = Router();

router.get("/", book.getAll)
router.post("/", book.add)

export default router;