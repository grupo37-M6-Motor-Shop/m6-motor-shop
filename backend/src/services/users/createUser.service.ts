import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IAddress } from "../../interfaces/address.interface";
import { IUser, IUserRequest } from "../../interfaces/users.interface";

const createUserService = async (user: IUserRequest): Promise<IUser> => {
	const {
		name,
		email,
		cpf,
		phone,
		birthday,
		description,
		advertiser,
		password,
		isAdm,
		cep,
		state,
		city,
		street,
		number,
		complement,
	} = user;

	const userRepository = AppDataSource.getRepository(User);
	const addressRepository = AppDataSource.getRepository(Address);

	const findCpf = await userRepository.findOneBy({ cpf });

	if (findCpf) {
		throw new AppError("CPF already exists", 409);
	}

	const newAddress: IAddress = addressRepository.create({
		cep,
		state,
		city,
		street,
		number,
		complement
	});

	await addressRepository.save(newAddress);

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
		address: newAddress
	});

	await userRepository.save(newUser);

	return newUser;
};

export default createUserService;
