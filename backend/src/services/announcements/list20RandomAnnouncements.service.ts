import AppDataSource from "../../data-source";
import Announcement from "../../entities/announcement.entity";
import { IAnnouncement } from "../../interfaces/announcements.interface";

const list20RandomAnnoucementsService = async (): Promise<IAnnouncement[]> => {
	const announcementRepository = AppDataSource.getRepository(Announcement);
	const randomAnnouncements = announcementRepository
		.createQueryBuilder()
		.orderBy("RANDOM()")
		.take(20)
		.getMany();

	return randomAnnouncements;
};

export default list20RandomAnnoucementsService;
