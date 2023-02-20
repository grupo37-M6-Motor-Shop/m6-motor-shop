import { Request, Response } from "express";
import listAllAdsService from "../../services/ads/listAllAds.service";

const listAllAdsController = async (req: Request, res: Response) => {
	const allAds = await listAllAdsService();

	return res.json(allAds);
};

export default listAllAdsController;
