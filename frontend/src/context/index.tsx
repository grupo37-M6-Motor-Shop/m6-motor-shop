import { createContext, useState } from "react";

interface IMotorShopContext {
	openModalCreateAd: boolean;
	setOpenModalCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
	openModalUpdateAd: boolean;
	setOpenModalUpdateAd: React.Dispatch<React.SetStateAction<boolean>>;
	openModalDeleteAd: boolean;
	setOpenModalDeleteAd: React.Dispatch<React.SetStateAction<boolean>>;
	handleCloseModal: () => void;
	registerAd: (data: any) => void;
}

interface IProvider {
	children: React.ReactNode;
}

export const MotorShopContext = createContext<IMotorShopContext>(
	{} as IMotorShopContext
);

const MotorShopProvider = ({ children }: IProvider) => {
	const [openModalCreateAd, setOpenModalCreateAd] = useState(false);
	const [openModalUpdateAd, setOpenModalUpdateAd] = useState(false);
	const [openModalDeleteAd, setOpenModalDeleteAd] = useState(false);

	const registerAd = async (data: any) => {
		console.log(data);
	};

	const handleCloseModal = () => {
		setOpenModalCreateAd(false);
		setOpenModalDeleteAd(false);
		setOpenModalUpdateAd(false);
	};

	return (
		<MotorShopContext.Provider
			value={{
				openModalCreateAd,
				setOpenModalCreateAd,
				openModalUpdateAd,
				setOpenModalUpdateAd,
				openModalDeleteAd,
				setOpenModalDeleteAd,
				handleCloseModal,
				registerAd,
			}}
		>
			{children}
		</MotorShopContext.Provider>
	);
};

export default MotorShopProvider;
