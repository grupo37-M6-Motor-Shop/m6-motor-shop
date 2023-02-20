import { Request, Response } from "express";
import { IAdRequest } from "../../interfaces/ads.interface";
import createAdService from "../../services/ads/createAd.service";

const createAdController = async (req: Request, res: Response) => {
	const {
		typeAd,
		description,
		title,
		mileage,
		price,
		typeVehicle,
		year,
		isActive,
		urlCoverImage,
	}: IAdRequest = req.body;
	const userId = req.user.id;
	const createdAd = await createAdService(
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
		},
		userId
	);

	return res.status(201).json(createdAd);
};

export default createAdController;
