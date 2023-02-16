import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser } from "../../interfaces/users.interface";

const userProfileService = async (loggedUser: string): Promise<IUser> => {
  console.log("service")
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id: loggedUser,
  });

  return user!;
}

export default userProfileService;
