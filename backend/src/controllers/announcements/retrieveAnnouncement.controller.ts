import { Request, Response } from "express";
import retrieveAnnouncementService from "../../services/announcements/retrieveAnnouncement.service";

const retrieveAnnouncementController = async (req: Request, res: Response) => {
	const announcementId = req.params.id;
	const foundedAnnouncement = await retrieveAnnouncementService(
		announcementId
	);

	return res.json(foundedAnnouncement);
};

export default retrieveAnnouncementController;
