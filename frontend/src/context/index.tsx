import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IFormCreateAd } from "../interfaces/FormCreateAd/FromCreateAd";
import { IFormUpdateAd } from "../interfaces/FormUpdateAd/FormUpdateAd";
import { IAds } from "../interfaces/IAds/IAds";
import { IError } from "../interfaces/IError/IError";
import { ILogin } from "../interfaces/ILogin/ILogin";
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
	const [isActiveAd, setIsActiveAd] = useState(false);
	const [token, setToken] = useState(localStorage.getItem("@motors-shop:token") || "");

	const navigate = useNavigate();

	useEffect(() => {
    const loadUser = async () => {
      if (token !== "") {
        try{
          api.defaults.headers.Authorization = `Bearer ${token}`;

          await api.get("/users/profile").then((res) => setUser(res.data));
          navigate("/homepage", { replace: true });
        } catch(error) {
          console.error(error);
        }
      }
    }
		loadUser();

		if (token) {
			setIsLoggedIn(true);
			getUserByProfile();
			// const ad = JSON.parse(window.localStorage.getItem("@motor-shop:ad") || "{}");
			// getAdbyId(ad.id)
			// console.log(ad)
			// getUserById("e4e1de6d-56c2-41cf-b6c6-7771fb648875");
		}
	}, [token]);

	const signIn = async (data: ILogin) => {
		const { email, password } = data;
		const token = await api.post("/login", { email, password }).then(res => res.data.token);
		api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem("@motors-shop:token", token);
    setToken(token);
	}

	const handleCloseModal = () => {
		setOpenModalCreateAd(false);
		setOpenModalDeleteAd(false);
		setOpenModalUpdateAd(false);
	};

	const getUserByProfile = async () => {
		try {
			// api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IUser>("/users/profile");
			setUserProfile(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getUserById = async (userId: string) => {
		try {
			// api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IUser>(`/users/${userId}`);
			setUser(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getAdbyId = async (idAd: string) => {
		try {
			// api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IAds>(`/ads/${idAd}`);
			setAd(res.data);
			localStorage.setItem("@motor-shop:ad", JSON.stringify(res.data));
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
			// api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.post<IFormCreateAd>("/ads", data);
			getRandomAds();
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const updateAd = async (data: IFormUpdateAd, adId: string) => {
		const galleryData = data;
		try {
			// api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.patch<IFormUpdateAd>(`/ads/${adId}`, data);
			await api.patch(`/galleries/${galleryData.galleryId}`, galleryData);
			getRandomAds();
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const deleteAd = async (adId: string) => {
		try {
			await api.delete(`/ads/${adId}`);
			getRandomAds();
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
				isActiveAd,
				setIsActiveAd,
				deleteAd,
				signIn,
				token,
			}}
		>
			{children}
		</MotorShopContext.Provider>
	);
};

export default MotorShopProvider;
