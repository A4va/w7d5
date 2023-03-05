import { Router } from "express";
import loan from "../controller/loan";
import validate from "../middleware/validate";
import { loanCheck } from "../zod.schema/zod.loan";

const router = Router();

router.get('/', loan.getAll)
router.post('/', validate(loanCheck), loan.add)
router.delete('/:id', loan.remove)
router.get('/:id', loan.isLoaned)


export default router;