import Button from "../../components/Button";
import Card from "../../components/Card";
import {
	Section,
	ContainerButtons,
	ContainerInfo,
	InfoHome,
	InfoSection,
	ListCards,
	TitleHome,
	TitleSection,
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
		{
			id: 2,
			userName: "Daniel Galvan",
			urlImage:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAvnGucdcwtnFB-XlqsKRLkiQEBfGGSgZSw3ls0BORMYzWRX65FR41wfZcKPfMkY9ATD1kp0KAVDPTyeif9czApW5NnwGu7wZscZcffB4TLWJNOt6v0XH2fbBunyyH0RrYuL-u4thKtifYF08VrdgULlqg2p_GxtDIWAoakrjJOnSynJdy48fxN29OyA/s2560/Chevrolet-Tracker-2023%20%281%29.jpg",
			title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
			mileage: 1000,
			year: 1990,
		},
		{
			id: 3,
			userName: "Daniel Galvan",
			urlImage:
				"https://www.infomoney.com.br/wp-content/uploads/2022/05/carros-de-luxo-e1653484670585.jpg?quality=70",
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
				<Section>
					<TitleSection>Leião</TitleSection>
					<ListCards>
						{user.map((info) => (
							<Card
								key={info.id}
								auction
								userName={info.userName}
								urlImage={info.urlImage}
								description={info.description}
								mileage={info.mileage}
								year={info.year}
							/>
						))}
					</ListCards>
				</Section>
				<Section>
					<TitleSection>Carros</TitleSection>
					<ListCards>
						{user.map((info) => (
							<Card
								key={info.id}
								userName={info.userName}
								urlImage={info.urlImage}
								description={info.description}
								mileage={info.mileage}
								year={info.year}
							/>
						))}
					</ListCards>
				</Section>
				<Section>
					<TitleSection>Motos</TitleSection>
					<ListCards>
						{user.map((info) => (
							<Card
								key={info.id}
								userName={info.userName}
								urlImage={info.urlImage}
								description={info.description}
								mileage={info.mileage}
								year={info.year}
							/>
						))}
					</ListCards>
				</Section>
			</main>
			<footer
				style={{
					width: "100%",
					height: "80px",
					backgroundColor: "var(--grey6)",
				}}
			></footer>
		</>
	);
};

export default Home;
