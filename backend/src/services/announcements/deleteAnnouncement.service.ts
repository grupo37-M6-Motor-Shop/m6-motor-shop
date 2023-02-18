import AppDataSource from "../../data-source";
import Announcement from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppError";

const deleteAnnouncementService = async (
	announcementId: string
): Promise<void> => {
	const announcementRepository = AppDataSource.getRepository(Announcement);
	const foundedAnnouncement = await announcementRepository.findOneBy({
		id: announcementId,
	});

	if (!foundedAnnouncement) {
		throw new AppError("Announcement not found", 404);
	}

	await announcementRepository.delete({ id: announcementId });
};

export default deleteAnnouncementService;
