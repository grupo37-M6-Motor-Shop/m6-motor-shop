import AppDataSource from "../../data-source";
import Announcement from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppError";
import {
	IAnnouncement,
	IAnnouncementUpdate,
} from "../../interfaces/announcements.interface";

const updateAnnouncementService = async (
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
	}: IAnnouncementUpdate,
	announcementId: string
): Promise<IAnnouncement> => {
	const announcementRepository = AppDataSource.getRepository(Announcement);
	const foundedAnnoucement = await announcementRepository.findOneBy({
		id: announcementId,
	});

	if (!foundedAnnoucement) {
		throw new AppError("Announcement not found", 404);
	}

	await announcementRepository.update(announcementId, {
		typeAnnouncement,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlImage,
	});

	const updatedAnnouncement = await announcementRepository.findOneBy({
		id: announcementId,
	});

	return updatedAnnouncement!;
};

export default updateAnnouncementService;
