import AppDataSource from "../../data-source";
import Announcement from "../../entities/announcement.entity";
import { IAnnouncement } from "../../interfaces/announcements.interface";

const listAllAnnoucementsService = async (): Promise<IAnnouncement[]> => {
	const announcementRepository = AppDataSource.getRepository(Announcement);
	const allAnnoucements = announcementRepository.find();

	return allAnnoucements;
};

export default listAllAnnoucementsService;
