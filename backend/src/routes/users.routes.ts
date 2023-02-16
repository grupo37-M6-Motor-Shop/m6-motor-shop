import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import retrieveUserController from "../controllers/users/retrieveUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import userProfileController from "../controllers/users/userProfile.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureEmailAlreadyExistMiddleware from "../middlewares/ensureEmailAlreadyExists.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdmin.middleware";

const userRoutes = Router();

userRoutes.post("", ensureEmailAlreadyExistMiddleware, createUserController);
userRoutes.get("", ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController);
userRoutes.get("/profile", ensureAuthMiddleware, userProfileController);
userRoutes.get("/:id", ensureAuthMiddleware, retrieveUserController);
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);

export default userRoutes;
