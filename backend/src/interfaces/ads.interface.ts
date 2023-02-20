import User from "../entities/user.entity";
import Comment from "../entities/comment.entity";
import gallery from "../entities/gallery.entity";

export interface IAdRequest {
	typeAd: string;
	title: string;
	description: string;
	year: number;
	mileage: number;
	price: number;
	isActive: boolean;
	typeVehicle: string;
	urlCoverImage: string;
}

export interface IAd extends IAdRequest {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	user: User;
	comments: Comment[];
	gallery: gallery;
}

export interface IAdUpdate {
	typeAd?: string;
	title?: string;
	description?: string;
	year?: number;
	mileage?: number;
	price?: number;
	isActive?: boolean;
	typeVehicle?: string;
	urlCoverImage?: string;
}
