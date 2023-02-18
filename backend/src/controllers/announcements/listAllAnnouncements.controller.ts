import { Request, Response } from "express";
import listAllAnnouncementsService from "../../services/announcements/listAllAnnouncements.service";

const listAllAnnouncementsController = async (req: Request, res: Response) => {
	const allAnnouncements = await listAllAnnouncementsService();

	return res.json(allAnnouncements);
};

export default listAllAnnouncementsController;
