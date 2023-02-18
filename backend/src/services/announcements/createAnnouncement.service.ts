import AppDataSource from "../../data-source";
import Announcement from "../../entities/announcement.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
	IAnnouncement,
	IAnnouncementRequest,
} from "../../interfaces/announcements.interface";

const createAnnouncementService = async (
	announcment: IAnnouncementRequest,
	userId: string
): Promise<IAnnouncement> => {
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
	} = announcment;

	const announcementRepository = AppDataSource.getRepository(Announcement);
	const userRepository = AppDataSource.getRepository(User);
	const foundedUser = await userRepository.findOneBy({ id: userId });

	if (!foundedUser) {
		throw new AppError("User not found", 404);
	}

	const newAnnouncement: IAnnouncement = announcementRepository.create({
		typeAnnouncement,
		title,
		description,
		year,
		mileage,
		price,
		isActive,
		typeVehicle,
		urlImage,
		user: foundedUser,
	});

	await announcementRepository.save(newAnnouncement);

	return newAnnouncement;
};

export default createAnnouncementService;
