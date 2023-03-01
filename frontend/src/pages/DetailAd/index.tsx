import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputComment from "../../components/InputComment";
import PhotoList from "../../components/PhotoList";
import { MotorShopContext } from "../../context";
import { IAds } from "../../interfaces/IAds/IAds";
import { IGallery } from "../../interfaces/IGallery/IGallery";
import api from "../../services";
import {
	BackgroundContent,
	Comments,
	Container,
	Image,
	ContainerInfo,
	InfoAd,
	Main,
	ContainerPriceYearKm,
	InfoKmYear,
	FontPrice,
	InfoVehicle,
	Description,
	InfoAdvertiser,
	Title,
	Content,
	Info,
	UserImg,
	Name,
	ContainerComments,
} from "./style";

const DetailAd = () => {
	const { getUserById } = useContext(MotorShopContext);
	document.body.style.overflow = "unset";
	const navigate = useNavigate();
	const [ad, setAd] = useState<IAds>({} as IAds);
	const { id } = useParams();

	const retrieveAd = async () => {
		try {
			const res = await api.get<IAds>(`/ads/${id}`);
			setAd(res.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		retrieveAd();
	}, [id]);

	const handleClick = async () => {
		await getUserById(ad.user.id);
		navigate(`/profile/${ad.user.id}`, { replace: true });
	};

	return (
		<Container>
			<Header />
			<Main>
				<BackgroundContent />
				<Content>
					<ContainerInfo>
						<InfoAd>
							<Image>
								<img src={ad.urlCoverImage} alt="" />
							</Image>

							<InfoVehicle>
								<p>{ad.title}</p>

								<ContainerPriceYearKm>
									<div>
										<InfoKmYear>{ad.mileage} KM</InfoKmYear>
										<InfoKmYear>{ad.year}</InfoKmYear>
									</div>
									<FontPrice>R$ {ad.price}</FontPrice>
								</ContainerPriceYearKm>
								<Button
									color="whiteFixed"
									bgcolor="brand1"
									component="medium"
									width="8rem"
									hover={{ bgcolor: "brand2" }}
								>
									Comprar
								</Button>
							</InfoVehicle>

							<Description align="justify">
								<Title>Descrição</Title>
								{ad.description}
							</Description>
						</InfoAd>

						<InfoAdvertiser>
							{ad.gallery && (
								<>
									<PhotoList
										id={ad.gallery.id}
										urlImage1={ad.gallery.urlImage1}
										urlImage2={ad.gallery.urlImage2}
										urlImage3={ad.gallery.urlImage3}
										urlImage4={ad.gallery.urlImage4}
										urlImage5={ad.gallery.urlImage5}
										urlImage6={ad.gallery.urlImage6}
									/>
									<Info>
										<UserImg>{ad.user.name[0]}</UserImg>
										<Name>{ad.user.name}</Name>
										<Description align="center">
											{ad.user.description}
										</Description>
										<Button
											color="whiteFixed"
											bgcolor="grey0"
											component="medium"
											width="14rem"
											onClick={handleClick}
										>
											Ver todos os anúncios
										</Button>
									</Info>
								</>
							)}
						</InfoAdvertiser>
					</ContainerInfo>
					<ContainerComments>
						<Comments>
							<Title>Comentários</Title>
							<CardComment
								name="Marco Oliveira"
								description="Gostei muito!"
							/>
							<CardComment
								name="Marcelo Silva"
								description="Excelente. Gostaria de saber sobre a forma de pagamento."
							/>
							<CardComment
								name="Larissa Neves"
								description="Lorem ipsum dolor sit amet. Et autem fuga et quas officiis et nostrum repellat hic molestias perspiciatis aut adipisci accusantium est voluptatem similique non ipsam quis. Est excepturi commodi a atque nulla est distinctio animi."
							/>
						</Comments>
						<InputComment />
					</ContainerComments>
				</Content>
			</Main>
			<Footer />
		</Container>
	);
};

export default DetailAd;
