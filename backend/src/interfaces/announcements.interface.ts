import User from "../entities/user.entity";
import Galery from "../entities/galery.entity";
import Comment from "../entities/comment.entity";

export interface IAnnouncementRequest {
	typeAnnouncement: string;
	title: string;
	description: string;
	year: number;
	mileage: number;
	price: number;
	isActive: boolean;
	typeVehicle: string;
	urlImage: string;
}

export interface IAnnouncement extends IAnnouncementRequest {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	user: User;
	comments: Comment[];
	galerys: Galery[];
}

export interface IAnnouncementUpdate {
	typeAnnouncement?: string;
	title?: string;
	description?: string;
	year?: number;
	mileage?: number;
	price?: number;
	isActive?: boolean;
	typeVehicle?: string;
	urlImage?: string;
}
