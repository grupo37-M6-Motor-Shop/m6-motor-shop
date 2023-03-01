import { FormCreateComment } from "../FormCreateComment/FormCreateComment";
import { IFormUpdateAd } from "../FormUpdateAd/FormUpdateAd";
import { FormUpdateAddressUser } from "../FormUpdateAddressUser/FormUpdateAddressUser";
import { FormUpdateUser } from "../FormUpdateUser/FormUpdateUser";
import { IAds } from "../IAds/IAds";
import { ILogin } from "../ILogin/ILogin";
import { IRegisterUser } from "../IRegisterUser/IRegisterUser";
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
	deleteAd: (adId: string) => void;
	signIn: (data: ILogin) => void;
	token: string;
	getAdbyIdNotOwner: (adId: string) => void;
	modalEditUser: boolean;
	setModalEditUser: React.Dispatch<React.SetStateAction<boolean>>;
	updateUser: (data: FormUpdateUser) => void;
	logout: () => void;
	isAdvertiser: boolean;
	setIsAdvertiser: React.Dispatch<React.SetStateAction<boolean>>;
	registerUser: (data: IRegisterUser) => void;
	openModalRegisterUserSuccess: boolean;
	setOpenModalRegisterUserSuccess: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	openModalUpdateAddresUser: boolean;
	setOpenModalUpdateAddresUser: React.Dispatch<React.SetStateAction<boolean>>;
	updateAddressUser: (data: FormUpdateAddressUser, addressId: string) => void;
	createComment: (data: FormCreateComment) => void;
	openModalDeleteUser: boolean;
	setOpenModalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
	deleteUser: (userId: string) => void;
}
