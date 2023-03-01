import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import softDeleteUserController from "../controllers/users/softDeleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import retrieveUserController from "../controllers/users/retrieveUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import userProfileController from "../controllers/users/userProfile.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureEmailAlreadyExistMiddleware from "../middlewares/ensureEmailAlreadyExists.middleware";
import deleteUserController from "../controllers/users/deleteUser.controller";

const userRoutes = Router();

userRoutes.post("", ensureEmailAlreadyExistMiddleware, createUserController);
userRoutes.get("", ensureAuthMiddleware, listUsersController);
userRoutes.get("/profile", ensureAuthMiddleware, userProfileController);
userRoutes.get("/:id", retrieveUserController);
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
userRoutes.delete("/desactive/:id", ensureAuthMiddleware, softDeleteUserController);
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
