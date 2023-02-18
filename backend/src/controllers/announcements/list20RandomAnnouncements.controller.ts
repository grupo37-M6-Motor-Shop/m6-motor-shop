import { Request, Response } from "express";
import list20RandomAnnouncementsService from "../../services/announcements/list20RandomAnnouncements.service";

const list20RandomAnnouncementsController = async (
	req: Request,
	res: Response
) => {
	const randomAnnouncements = await list20RandomAnnouncementsService();

	return res.json(randomAnnouncements);
};

export default list20RandomAnnouncementsController;
