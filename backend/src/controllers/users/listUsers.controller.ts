import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listusersService from "../../services/users/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listusersService();

  return res.json(instanceToPlain(users));
}

export default listUsersController;
