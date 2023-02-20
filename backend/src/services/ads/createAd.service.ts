import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IAd, IAdRequest } from "../../interfaces/ads.interface";

const createAdService = async (
	{
		typeAd,
		description,
		title,
		mileage,
		price,
		typeVehicle,
		year,
		isActive,
		urlCoverImage,
	}: IAdRequest,
	userId: string
): Promise<IAd> => {
	const adRepository = AppDataSource.getRepository(Ad);
	const userRepository = AppDataSource.getRepository(User);
	const foundUser = await userRepository.findOneBy({ id: userId });

	if (!foundUser) {
		throw new AppError("User not found", 404);
	}

	const newAd: IAd = adRepository.create({
		typeAd,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlCoverImage,
		user: foundUser,
	});

	await adRepository.save(newAd);

	return newAd;
};

export default createAdService;
