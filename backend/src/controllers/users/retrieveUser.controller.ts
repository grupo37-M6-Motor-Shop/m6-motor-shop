import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import retrieveUserService from "../../services/users/retrieveUser.service";

const retrieveUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  // const isAdm: boolean = req.user.isAdmin
  const user = await retrieveUserService(userId);

  return res.json(instanceToPlain(user));
}

export default retrieveUserController;
