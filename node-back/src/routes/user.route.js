import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { userExist } from "../middleware/userExist";
import { auth } from "../middleware/auth";
const router = Router();

router.post("/signup", userExist, userController.singup);
router.post("/login", userController.login);
router.get("/getprofile", auth, userController.getProfile);

export default router;
