import AppDataSource from "../../data-source";
import Ad from "../../entities/ad.entity";
import { AppError } from "../../errors/AppError";
import { IAd } from "../../interfaces/ads.interface";

const retrieveAdService = async (adId: string): Promise<IAd> => {
	const adRepository = AppDataSource.getRepository(Ad);

	const foundAd = await adRepository.findOne({
		where: {
			id: adId,
		},
		relations: {
			user: true,
			gallery: true,
			comments: true,
		},
	});

	if (!foundAd) {
		throw new AppError("Ad not found", 404);
	}

	return foundAd;
};

export default retrieveAdService;