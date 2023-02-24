import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { IFormCreateAd } from "../interfaces/FormCreateAd/FromCreateAd";
import { IFormUpdateAd } from "../interfaces/FormUpdateAd/FormUpdateAd";
import { IAds } from "../interfaces/IAds/IAds";
import { IError } from "../interfaces/IError/IError";
import { IMotorShopContext } from "../interfaces/IMotorShopContext/IMotorShopContext";
import { IProvider } from "../interfaces/IProvider/IProvider";
import { IUser } from "../interfaces/IUser/IUser";
import api from "../services";

export const MotorShopContext = createContext<IMotorShopContext>(
	{} as IMotorShopContext
);

const MotorShopProvider = ({ children }: IProvider) => {
	const [user, setUser] = useState<IUser>({} as IUser);
	const [userProfile, setUserProfile] = useState<IUser>({} as IUser);
	const [randomAds, setRandomAds] = useState<IAds[]>([]);
	const [ad, setAd] = useState<IAds>({} as IAds);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [openModalCreateAd, setOpenModalCreateAd] = useState(false);
	const [openModalUpdateAd, setOpenModalUpdateAd] = useState(false);
	const [openModalDeleteAd, setOpenModalDeleteAd] = useState(false);

	console.log(randomAds);

	/* localStorage.setItem(
		"@motor-shop:token",
		JSON.stringify(
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY3NzE4NjAxNSwiZXhwIjoxNjc3MjcyNDE1LCJzdWIiOiJlNGUxZGU2ZC01NmMyLTQxY2YtYjZjNi03NzcxZmI2NDg4NzUifQ.hCCSQvhuDizyPkdOIgx6Y694g1any9pV0s_Jbgjqt8M"
		)?.replace(/"/gi, "")
	); */ /* use token do sua api */

	const token = localStorage.getItem("@motor-shop:token");

	useEffect(() => {
		if (token) {
			setIsLoggedIn(true);
			getUserByProfile();
			// getUserById("e4e1de6d-56c2-41cf-b6c6-7771fb648875");
		}
	}, []);

	const handleCloseModal = () => {
		setOpenModalCreateAd(false);
		setOpenModalDeleteAd(false);
		setOpenModalUpdateAd(false);
	};

	const getUserByProfile = async () => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IUser>("/users/profile");
			setUserProfile(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getUserById = async (userId: string) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IUser>(`/users/${userId}`);
			setUser(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getAdbyId = async (idAd: string) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IAds>(`/ads/${idAd}`);
			setAd(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getRandomAds = async () => {
		try {
			const res = await api.get<IAds[]>("/ads/random");
			setRandomAds(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const registerAd = async (data: IFormCreateAd) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.post<IFormCreateAd>("/ads", data);
			getRandomAds();
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const updateAd = async (data: IFormUpdateAd, adId: string) => {
		console.log(data);
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.patch<IFormUpdateAd>(`/ads/${adId}`, data);
			getRandomAds();
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	return (
		<MotorShopContext.Provider
			value={{
				user,
				setUser,
				userProfile,
				setUserProfile,
				getUserByProfile,
				getUserById,
				randomAds,
				setRandomAds,
				ad,
				setAd,
				getAdbyId,
				updateAd,
				isLoggedIn,
				setIsLoggedIn,
				openModalCreateAd,
				setOpenModalCreateAd,
				openModalUpdateAd,
				setOpenModalUpdateAd,
				openModalDeleteAd,
				setOpenModalDeleteAd,
				handleCloseModal,
				registerAd,
				getRandomAds,
			}}
		>
			{children}
		</MotorShopContext.Provider>
	);
};

export default MotorShopProvider;
