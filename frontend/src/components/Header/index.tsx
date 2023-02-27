import {
	StyledHeader,
	Image,
	Link,
	Nav,
	DivNav,
	Divise,
	Text,
	FontTwoLatters,
	Profile,
	DropDown,
	DivBar,
	Menu,
	Divider,
	Sidebar,
	LinkBar,
	Settings,
	MenuAnimation,
	MenuBurger,
	DivButton,
	ContainerUser,
	FontUserName,
	UserImg,
	DivProfile
} from "./style";
import logo from "../../assets/img/motor_shop_logo_header.svg";
import Button from "../Button";
import { useContext, useState } from "react";
import { MotorShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
import Modal from "../modal";
import ModalEditUser from "../ModalEditUser";

const Header = ({ auction, colorFont, image }: any) => {
	const [dropDown, setDropDown] = useState<number>(0);
	const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
	const {
		token,
		user: { name, advertiser },
		getUserByProfile,
		setIsLoggedIn,
		modalEditUser,
		setModalEditUser,
	} = useContext(MotorShopContext);
	const navigate = useNavigate();
	const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);
	const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
		undefined
	);

	const handleClickProfile = async () => {
		await getUserByProfile();
		navigate("/profile");
	};

	const setBackgroundRandomColor = () => {
		if (!backgroundColor) {
			const colors: string[] = [
				"--random1",
				"--random2",
				"--random3",
				"--random4",
				"--random5",
				"--random6",
				"--random7",
				"--random8",
				"--random9",
				"--random10",
				"--random11",
				"--random12",
			];

			const colorRandom = Math.floor(Math.random() * colors.length);
			const randomColor = colors[colorRandom] as string;

			setBackgroundColor(randomColor);
		}
	};

	const colorRandom = setBackgroundRandomColor();

	const handleClickdropDownProfile = () => {
		if (dropDown === 0) {
			setDropDown(1);
		} else {
			setDropDown(0);
		}
	};

	const twoLetters = () => {
		if (name !== undefined) {
			const first = name[0];
			const second = name[name.indexOf(" ") + 1];
			return (
				<FontTwoLatters>
					{`${first}${second}`.toUpperCase()}
				</FontTwoLatters>
			);
		}
	};

	return (
		<>
			<StyledHeader>
				<Image src={logo} alt="logo-motor-shop" />
				<Nav>
					<DivNav>
						<MenuBurger onClick={showSideBar}>
							<MenuAnimation
								isSideBarVisible={isSideBarVisible}
								onClick={showSideBar}
							></MenuAnimation>
						</MenuBurger>
						<Link href="/homepage#carros">Carros</Link>
						<Link href="/homepage#motos">Motos</Link>
						<Link href="/homepage#leilao">Leilão</Link>
					</DivNav>
					<Divise />
					<DivProfile>
						{token === "" ? (
							<>
								<DivButton>
									<Button
										color={"brand1"}
										bgcolor={"grey10"}
										component={"big"}
										width={"133px"}
										onClick={() => navigate(`/login`)}
									>
										Fazer Login
									</Button>
									<Button
										color={"grey0"}
										bgcolor={"grey10"}
										component={"big"}
										border={"grey4"}
										width={"133px"}
										hover={{ bgcolor: "brand4" }}
										onClick={() => navigate(`/register`)}
									>
										Cadastrar
									</Button>
								</DivButton>
							</>
						) : (
							<>
								<Profile>
									<ContainerUser
										onClick={() =>
											handleClickdropDownProfile()
										}
									>
										<UserImg colorRandom={backgroundColor}>
											{image ? image : twoLetters()}
										</UserImg>
										<FontUserName
											auction={auction}
											colorFont={colorFont}
										>
											{name}
										</FontUserName>
									</ContainerUser>
									{!advertiser ? (
										<>
											<DropDown dropdown={dropDown}>
												<Text onClick={() => {
													handleClickdropDownProfile()
													setModalEditUser(true)
												}} >Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text
													onClick={() => {
														localStorage.clear();
														setIsLoggedIn(false);
														handleClickdropDownProfile();
														navigate(`/homepage`);
													}}
												>
													Sair
												</Text>
											</DropDown>
										</>
									) : (
										<>
											<DropDown dropdown={dropDown}>
												<Text onClick={() => {
													handleClickdropDownProfile()
													setModalEditUser(true)
												}}  >Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text
													onClick={handleClickProfile}
												>
													Meus Anúncios
												</Text>
												<Text
													onClick={() => {
														localStorage.clear();
														setIsLoggedIn(false);
														handleClickdropDownProfile();
														navigate(`/homepage`);
													}}
												>
													Sair
												</Text>
											</DropDown>
										</>
									)}
								</Profile>
							</>
						)}
						{isSideBarVisible && token === "" ? (
							<Sidebar isSideBarVisible={isSideBarVisible}>
								<Menu>
									<DivBar>
										<LinkBar href="/homepage#carros">
											Carros
										</LinkBar>
										<LinkBar href="/homepage#motos">
											Motos
										</LinkBar>
										<LinkBar href="/homepage#leilao">
											Leilão
										</LinkBar>
									</DivBar>
									<Divider />
									<DivBar>
										<LinkBar href="/login">
											Fazer Login
										</LinkBar>
										<Button
											color={"grey0"}
											bgcolor={"grey10"}
											component={"big"}
											border={"grey4"}
											width={"fullWidth"}
										>
											Cadastrar
										</Button>
									</DivBar>
								</Menu>
							</Sidebar>
						) : (
							<Sidebar isSideBarVisible={isSideBarVisible}>
								<Menu>
									<DivBar>
										<LinkBar href="/homepage#carros">
											Carros
										</LinkBar>
										<LinkBar href="/homepage#motos">
											Motos
										</LinkBar>
										<LinkBar href="/homepage#leilao">
											Leilão
										</LinkBar>
									</DivBar>
									<Divider />
									<DivBar>
										<Settings>
											<ContainerUser>
												<UserImg
													colorRandom={
														backgroundColor
													}
												>
													{image
														? image
														: twoLetters()}
												</UserImg>
												<FontUserName
													auction={auction}
													colorFont={colorFont}
												>
													{name}
												</FontUserName>
											</ContainerUser>
										</Settings>
										{!advertiser ? (
											<>
												<Text onClick={() => {
													handleClickdropDownProfile()
													setModalEditUser(true)
												}}  >Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text
													onClick={() => {
														localStorage.clear();
														navigate(`/homepage`);
													}}
												>
													Sair
												</Text>
											</>
										) : (
											<>
												<Text onClick={() => {
													handleClickdropDownProfile()
													setModalEditUser(true)
												}} >Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text
													onClick={handleClickProfile}
												>
													Meus Anúncios
												</Text>
												<Text
													onClick={() => {
														localStorage.clear();
														navigate(`/homepage`);
													}}
												>
													Sair
												</Text>
											</>
										)}
									</DivBar>
								</Menu>
							</Sidebar>
						)}
					</DivProfile>
				</Nav>
			</StyledHeader>
			{
				modalEditUser && <ModalEditUser/>
			}
		</>
	);
};

export default Header;
