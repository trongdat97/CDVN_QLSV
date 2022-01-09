import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { userExist } from "../middleware/userExist";
const router = Router();

router.post("/signup", userExist, userController.singup);
router.post("/login",userController.login);

export default router;
