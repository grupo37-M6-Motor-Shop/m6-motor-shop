import Button from "../../components/Button";
import Card from "../../components/Card";
import {
	ActionSection,
	ContainerButtons,
	ContainerInfo,
	InfoHome,
	InfoSection,
	TitleAction,
	TitleHome,
} from "./style";

const Home = () => {
	const user = [
		{
			id: 1,
			userName: "Daniel Galvan",
			urlImage:
				"https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960",
			title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 1000,
			year: 1990,
		},
	];
	return (
		<>
			<header
				style={{
					width: "100%",
					height: "80px",
					backgroundColor: "var(--grey6)",
				}}
			>
				Motors Shop
			</header>
			<main id="#home">
				<InfoSection>
					<ContainerInfo>
						<TitleHome>
							Velocidade e experiência em um lugar feito para você
						</TitleHome>
						<InfoHome>
							Um ambiente feito para você explorar o seu melhor
						</InfoHome>
						<ContainerButtons>
							<Button
								component="big"
								bgcolor="tranparent"
								color="grey10"
								border="grey10"
								width="fullWidth"
							>
								Carros
							</Button>
							<Button
								component="big"
								bgcolor="tranparent"
								color="grey10"
								border="grey10"
								width="fullWidth"
							>
								Motos
							</Button>
						</ContainerButtons>
					</ContainerInfo>
				</InfoSection>
				<ActionSection>
					<TitleAction>Leião</TitleAction>
					<ul>
						{user.map((info) => (
							<Card
								key={info.id}
								auction
								userName={info.userName}
								urlImage={info.urlImage}
								description={info.description}
                                
							/>
						))}
					</ul>
				</ActionSection>
				<section>Carros</section>
				<section>Motos</section>
			</main>
			<footer></footer>
		</>
	);
};

export default Home;
