import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser } from "../../interfaces/users.interface";

const retrieveUserService = async (
	userId: string,
	// isAdm: boolean
): Promise<IUser> => {
	const userRepository = AppDataSource.getRepository(User);

	const findUser = await userRepository.findOne({
		where: {
			id: userId,
		},
		relations: {
			address: true,
			ads: { gallery: true },
			comments: true,
		},
	});

	if (!findUser) {
		throw new AppError("User not found", 404);
	}

	// if ((!isAdm && findUser.isAdm) || (!isAdm && findUser.isActive === false)) {
	// 	throw new AppError("User is not admin", 401);
	// }

	return findUser;
};

export default retrieveUserService;
