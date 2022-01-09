import { Router } from "express";
import * as studentController from '../controllers/student.controller';
import { studentExist } from "../middleware/studentExits";

const router = Router();
router.post("/:classId",studentExist,studentController.add);
router.get("/getall",studentController.getAllStudent);
router.get("/:classId",studentController.getStudentByClassId)
router.put("/:studentId",studentExist,studentController.updateStudent);
router.delete("/:studentId",studentController.deleteStudent);
export default router;