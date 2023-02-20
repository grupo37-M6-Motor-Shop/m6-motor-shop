import { Request, Response } from "express";
import retrieveAdService from "../../services/ads/retrieveAd.service";

const retrieveAdController = async (req: Request, res: Response) => {
	const adId = req.params.id;
	const foundAd = await retrieveAdService(adId);

	return res.json(foundAd);
};

export default retrieveAdController;
