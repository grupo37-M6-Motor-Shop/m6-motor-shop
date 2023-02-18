import { Request, Response } from "express";
import { IAnnouncementRequest } from "../../interfaces/announcements.interface";
import createAnnouncementService from "../../services/announcements/createAnnouncement.service";

const createAnnouncementController = async (req: Request, res: Response) => {
	const announcement: IAnnouncementRequest = req.body;
	const userId = req.user.id;
	const createdAnnouncement = await createAnnouncementService(
		announcement,
		userId
	);

	return res.status(201).json(createdAnnouncement);
};

export default createAnnouncementController;
