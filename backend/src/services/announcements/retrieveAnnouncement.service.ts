import AppDataSource from "../../data-source";
import Announcement from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppError";
import { IAnnouncement } from "../../interfaces/announcements.interface";

const retrieveAnnouncementService = async (
	announcementId: string
): Promise<IAnnouncement> => {
	const announcementRepository = AppDataSource.getRepository(Announcement);

	const foundedAnnouncement = await announcementRepository.findOne({
		where: {
			id: announcementId,
		},
		relations: {
			user: true,
			galerys: true,
			comments: true,
		},
	});

	if (!foundedAnnouncement) {
		throw new AppError("Announcement not found", 404);
	}

	return foundedAnnouncement;
};

export default retrieveAnnouncementService;
