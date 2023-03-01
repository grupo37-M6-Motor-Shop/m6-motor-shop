import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalAdCreate from "../../components/ModalAdCreate";
import ModalAdDelete from "../../components/ModalAdDelete";
import ModalAdUpdate from "../../components/ModalAdUpdate";
import Section from "../../components/Section";
import { MotorShopContext } from "../../context";
import { IUser } from "../../interfaces/IUser/IUser";
import api from "../../services";
import {
	BackgroundInfo,
	Container,
	Description,
	Info,
	InfoUser,
	Main,
	Name,
	Tag,
	UserImg,
} from "./style";

const AdvertiverProfile = () => {
	document.body.style.overflow = "unset";
	const {
		openModalCreateAd,
		setOpenModalCreateAd,
		openModalUpdateAd,
		openModalDeleteAd,
	} = useContext(MotorShopContext);
	document.body.style.overflow = "unset";
	const [profileOwner, setProfileOwner] = useState(false);

	const { user, userProfile, setUserProfile } = useContext(MotorShopContext);

	const { id } = useParams();

	const retrieveUser = async () => {
		try {
			const res = await api.get<IUser>(`/users/${id}`);
			setUserProfile(res.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (user.id === userProfile.id) {
			setProfileOwner(true);
		}
		retrieveUser();
	}, [id]);

	return (
		<Container>
			<Header />
			<Main>
				<InfoUser>
					<BackgroundInfo />
					<Info>
						{userProfile.name && (
							<UserImg>{userProfile.name[0]}</UserImg>
						)}
						<Name>
							<p>{userProfile.name}</p>
							<Tag>Anunciante</Tag>
						</Name>
						<Description>{userProfile.description}</Description>
						{profileOwner && (
							<Button
								color="brand1"
								bgcolor="grey10"
								component="big"
								border="brand1"
								width="10rem"
								hover={{ bgcolor: "brand4" }}
								onClick={() => setOpenModalCreateAd(true)}
							>
								Criar Anúncio
							</Button>
						)}
					</Info>
				</InfoUser>
				{userProfile.ads && (
					<>
						<Section
							titleSection="Leilão"
							value="Leilão"
							userAd={userProfile}
							vehicles={userProfile.ads}
							auction={true}
							advertiser={profileOwner}
							profile
						/>
						<Section
							titleSection="Carros"
							value="Carro"
							userAd={userProfile}
							vehicles={userProfile.ads}
							auction={false}
							advertiser={profileOwner}
							profile
							tags
						/>
						<Section
							titleSection="Motos"
							value="Moto"
							userAd={userProfile}
							vehicles={userProfile.ads}
							auction={false}
							advertiser={profileOwner}
							profile
							tags
						/>
					</>
				)}

				{openModalDeleteAd && <ModalAdDelete />}
				{openModalUpdateAd && <ModalAdUpdate />}
				{openModalCreateAd && <ModalAdCreate />}
			</Main>
			<Footer />
		</Container>
	);
};

export default AdvertiverProfile;
