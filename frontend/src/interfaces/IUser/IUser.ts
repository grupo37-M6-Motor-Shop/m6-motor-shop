import { IAds } from "../IAds/IAds";

export interface IUser {
	id: string;
	name: string;
	email: string;
	cpf: string;
	phone: string;
	birthday: string;
	description: string;
	advertiser: boolean;
	newPassrwordCode: string | null;
	isActive: boolean;
	isAdm: boolean;
	address: {} | null;
	ads: IAds[];
	comments: Comment[];
}
