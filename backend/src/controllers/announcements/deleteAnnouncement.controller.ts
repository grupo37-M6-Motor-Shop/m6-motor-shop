import { Request, Response } from "express";
import deleteAnnouncementService from "../../services/announcements/deleteAnnouncement.service";

const deleteAnnouncementController = async (req: Request, res: Response) => {
	const announcementId = req.params.id;

	await deleteAnnouncementService(announcementId);

	return res.status(204).send();
};

export default deleteAnnouncementController;
