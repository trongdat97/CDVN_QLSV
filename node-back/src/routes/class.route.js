import { Router } from "express";
import * as classController from "../controllers/class.controller";
import { classExist } from "../middleware/classExits";
import {auth} from "../middleware/auth";

const router = Router();
router.post("/add",auth, classExist, classController.add);
router.get("/getall",classController.getAllClass)
router.put("/:classId",auth,classExist, classController.updateClass)
router.delete("/:classId",auth, classController.deleteClass)
export default router;
