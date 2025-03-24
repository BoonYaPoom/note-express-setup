import express from "express";
import authenticateToken from "../middleware/validationMiddleware";
import userController from "../controllers/userController";
const router = express.Router();

router.get("/users/list",authenticateToken,userController.listUser);

export default router;
