import { Request, Response } from "express";
import {
	IAnnouncement,
	IAnnouncementUpdate,
} from "../../interfaces/announcements.interface";
import updateAnnouncementService from "../../services/announcements/updateAnnouncement.service";

const updateAnnoucementController = async (req: Request, res: Response) => {
	const {
		typeAnnouncement,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlImage,
	}: IAnnouncementUpdate = req.body;
	const announcementId = req.params.id;
	const updatedAnnouncement = await updateAnnouncementService(
		{
			typeAnnouncement,
			title,
			description,
			year,
			mileage,
			price,
			isActive,
			typeVehicle,
			urlImage,
		},
		announcementId
	);

	return res.json(updatedAnnouncement);
};

export default updateAnnoucementController;
