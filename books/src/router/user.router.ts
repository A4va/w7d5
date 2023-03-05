import { Router } from "express";
import user from "../controller/user";
import validate from '../middleware/validate'
import { userCheck } from "../zod.schema/zod.user";

const router = Router();

router.get('/', user.getAll)
router.post('/', validate(userCheck), user.add)


export default router;