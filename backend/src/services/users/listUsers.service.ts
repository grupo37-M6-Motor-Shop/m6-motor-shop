import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser } from "../../interfaces/users.interface";

const listusersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();

  return users;
}

export default listusersService;
