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
import { ICooments } from "../../interfaces/IComments/IComments";
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
	const { ad, setAd, getUserById, user } = useContext(MotorShopContext);
	document.body.style.overflow = "unset";
	const [numComments, setNumComments] = useState(10);
	const navigate = useNavigate();
	const { id } = useParams();

	const showMoreComments = () => {
		setNumComments(numComments + 10);
	}

	const showLessComments = () => {
		setNumComments(10);
		console.log(numComments === ad.comments.length && numComments > 10)
	}

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
		window.scrollTo({ top: 0, behavior: "smooth" });
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
						{ad.comments && (
							<>
								<Comments>
									<Title>Comentários</Title>
									{ad.comments.slice(0, numComments).map((elem: ICooments) => (
										<CardComment
											key={elem.id}
											name={elem.owner.name}
											description={elem.description}
											time={elem.createdAt}
											create={elem.createdAt}
											update={elem.updatedAt}
										/>
									))}
									{ad.comments.length > numComments ?
										<Button
											color={"brand1"}
											bgcolor={"tranparent"}
											component={"medium"}
											onClick={showMoreComments}
											hover={{ color: "brand3" }}
										>
											Ver mais
										</Button>
										:
										ad.comments.length < numComments ? setNumComments(ad.comments.length) : null
									}
									{ad.comments.length === numComments ?
										<Button
											color={"brand1"}
											bgcolor={"tranparent"}
											component={"medium"}
											onClick={showLessComments}
											hover={{ color: "brand3" }}
											>
											Ver menos
										</Button>
										:
										null
									}
								</Comments>
							</>
						)}
						<InputComment />
					</ContainerComments>
				</Content>
			</Main>
			<Footer />
		</Container>
	);
};

export default DetailAd;
