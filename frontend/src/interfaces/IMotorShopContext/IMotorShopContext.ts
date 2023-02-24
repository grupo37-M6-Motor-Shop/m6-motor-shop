import { IFormUpdateAd } from "../FormUpdateAd/FormUpdateAd";
import { IAds } from "../IAds/IAds";
import { IUser } from "../IUser/IUser";

export interface IMotorShopContext {
	user: IUser;
	setUser: (state: IUser) => void;
	userProfile: IUser;
	setUserProfile: (state: IUser) => void;
	randomAds: IAds[];
	setRandomAds: (state: IAds[]) => void;
	ad: IAds;
	setAd: (state: IAds) => void;
	getAdbyId: (adId: string) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	openModalCreateAd: boolean;
	setOpenModalCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
	openModalUpdateAd: boolean;
	setOpenModalUpdateAd: React.Dispatch<React.SetStateAction<boolean>>;
	openModalDeleteAd: boolean;
	setOpenModalDeleteAd: React.Dispatch<React.SetStateAction<boolean>>;
	handleCloseModal: () => void;
	registerAd: (data: any) => void;
	getRandomAds: () => void;
	getUserByProfile: () => void;
	getUserById: (userId: string) => void;
	updateAd: (data: IFormUpdateAd, adId: string) => void;
	isActiveAd: boolean;
	setIsActiveAd: React.Dispatch<React.SetStateAction<boolean>>;
}
