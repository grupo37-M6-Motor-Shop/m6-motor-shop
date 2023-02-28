import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFormCreateAd } from "../interfaces/FormCreateAd/FromCreateAd";
import { IFormUpdateAd } from "../interfaces/FormUpdateAd/FormUpdateAd";
import { FormUpdateUser } from "../interfaces/FormUpdateUser/FormUpdateUser";
import { IAds } from "../interfaces/IAds/IAds";
import { IError } from "../interfaces/IError/IError";
import { ILogin } from "../interfaces/ILogin/ILogin";
import { IMotorShopContext } from "../interfaces/IMotorShopContext/IMotorShopContext";
import { IProvider } from "../interfaces/IProvider/IProvider";
import { IRegisterUser } from "../interfaces/IRegisterUser/IRegisterUser";
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
	const [modalEditUser, setModalEditUser] = useState<boolean>(false);
	const [openModalRegisterUserSuccess, setOpenModalRegisterUserSuccess] =
		useState(false);
	const [isActiveAd, setIsActiveAd] = useState(false);
	const [isAdvertiser, setIsAdvertiser] = useState<boolean>(false);
	const [token, setToken] = useState(
		localStorage.getItem("@motors-shop:token") || ""
	);

	const navigate = useNavigate();

	useEffect(() => {
		const loadUser = async () => {
			if (token !== "") {
				try {
					api.defaults.headers.Authorization = `Bearer ${token}`;
					await api
						.get("/users/profile")
						.then((res) => setUser(res.data));
					setIsLoggedIn(true);
					navigate("/homepage", { replace: true });
				} catch (error) {
					console.error(error);
					localStorage.removeItem("@motors-shop:token");
				}
			}
		};
		loadUser();
	}, [token]);

	const signIn = async (data: ILogin) => {
		const { email, password } = data;
		const token = await api
			.post("/login", { email, password })
			.then((res) => res.data.token);
		localStorage.setItem("@motors-shop:token", token);
		setToken(token);
		api.defaults.headers.Authorization = `Bearer ${token}`;
	};

	const logout = () => {
		localStorage.removeItem("@motors-shop:token");
		window.location.reload();
	};

	const registerUser = async (data: IRegisterUser) => {
		try {
			await api.post("/users", data);
			setOpenModalRegisterUserSuccess(true);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const handleCloseModal = () => {
		setOpenModalCreateAd(false);
		setOpenModalDeleteAd(false);
		setOpenModalUpdateAd(false);
		setModalEditUser(false);
		setOpenModalRegisterUserSuccess(false);
	};

	const getUserByProfile = async () => {
		try {
			const res = await api.get<IUser>("/users/profile");
			setUserProfile(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getUserById = async (userId: string) => {
		try {
			const res = await api.get<IUser>(`/users/${userId}`);
			setUserProfile(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const updateUser = async (data: FormUpdateUser) => {
		try {
			const res = await api.patch<IUser>(`/users/${user.id}`, data);
			setUser(res.data);
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getAdbyId = async (idAd: string) => {
		try {
			const res = await api.get<IAds>(`/ads/${idAd}`);
			setAd(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const getAdbyIdNotOwner = async (idAd: string) => {
		try {
			const res = await api.get<IAds>(`/ads/${idAd}`);
			setAd(res.data);
			setUserProfile(res.data.user);
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
			await api.post<IFormCreateAd>("/ads", data);
			getUserByProfile();
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const updateAd = async (data: IFormUpdateAd, adId: string) => {
		const galleryData = data;
		try {
			await api.patch<IFormUpdateAd>(`/ads/${adId}`, data);
			await api.patch(`/galleries/${galleryData.galleryId}`, galleryData);
			getUserByProfile();
			handleCloseModal();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
		}
	};

	const deleteAd = async (adId: string) => {
		try {
			await api.delete(`/ads/${adId}`);
			getUserByProfile();
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
				openModalRegisterUserSuccess,
				setOpenModalRegisterUserSuccess,
				handleCloseModal,
				registerAd,
				getRandomAds,
				isActiveAd,
				setIsActiveAd,
				deleteAd,
				signIn,
				token,
				getAdbyIdNotOwner,
				modalEditUser,
				setModalEditUser,
				updateUser,
				logout,
				isAdvertiser,
				setIsAdvertiser,
				registerUser,
			}}
		>
			{children}
		</MotorShopContext.Provider>
	);
};

export default MotorShopProvider;
