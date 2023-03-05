import { Router } from "express";
import user from "../controller/users";
import validate from "../middleware/validate";
import { userCheck } from "../zod.schema/zod.user";
import{ passCheck } from "../zod.schema/zod.pass";

const router = Router();

router.get("/", user.getAll)
router.post("/", validate(userCheck),user.add)
router.get("/email/:email", user.getEmail)
router.get("/older/:older", user.getOlder)
router.get("/role/:role", user.getCount)
router.get("/login", user.login)
router.put("/:id", validate(passCheck), user.newPass)
router.get("/year/:id", user.getYear)
router.get("/oldest/:year", user.getOldest)



export default router;