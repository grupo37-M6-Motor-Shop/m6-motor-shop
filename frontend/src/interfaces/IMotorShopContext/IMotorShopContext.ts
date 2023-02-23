import { IAds } from "../IAds/IAds";
import { IUser } from "../IUser/IUser";

export interface IMotorShopContext {
	user: IUser;
	setUser: (state: IUser) => void;
	randomAds: IAds[];
	setRandomAds: (state: IAds[]) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: (state: boolean) => void;
	openModalCreateAd: boolean;
	setOpenModalCreateAd: (state: boolean) => void;
	openModalUpdateAd: boolean;
	setOpenModalUpdateAd: (state: boolean) => void;
	openModalDeleteAd: boolean;
	setOpenModalDeleteAd: (state: boolean) => void;
	handleCloseModal: () => void;
	registerAd: (data: any) => void;
	getRandomAds: () => void;
}
