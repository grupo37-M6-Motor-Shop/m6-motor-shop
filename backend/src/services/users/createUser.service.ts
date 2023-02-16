import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/users.interface";

const createUserService = async (user: IUserRequest): Promise<IUser> => {
  const { name, email, cpf, phone, birthday, description, advertiser, password, isAdm } = user;

  const userRepository = AppDataSource.getRepository(User);

  const findCpf = await userRepository.findOneBy({ cpf });

  if (findCpf) {
    throw new AppError("CPF already exists", 409);
  }

  const newUser: IUser = userRepository.create({
    name,
    email,
    cpf,
    phone,
    birthday,
    description,
    advertiser,
    password: await hash(password, 10),
    isAdm,
  });

  await userRepository.save(newUser);

  return newUser;
}

export default createUserService;
