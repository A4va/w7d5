import { Router } from "express";
import movie from "../controller/movie"
import validate from '../middleware/validate'
import { movieCheck } from "../zod.schema/zod.movie";

const router = Router();

router.get("/", movie.getAll)
router.post("/", validate(movieCheck) , movie.add)
router.put("/:id", validate(movieCheck), movie.update)
router.delete("/:id", movie.remove)
router.get("/:name", movie.getName)
router.get("/gener/:genre", movie.getGenre)
router.get("/rate/:rate", movie.getRate)
router.delete("/", movie.removeAll)

export default router;