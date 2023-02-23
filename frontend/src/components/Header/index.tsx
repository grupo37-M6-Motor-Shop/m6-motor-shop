import {
	StyledHeader,
	Image,
	Link,
	Nav,
	DivNav,
	Divise,
	Text,
	Avatar,
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
} from "./style";
import logo from "../../assets/img/motor_shop_logo_header.svg";
import avatar from "../../assets/img/avatar.svg";
import Button from "../Button";
import { useState } from "react";

const Header = () => {
	const [dropDown, setDropDown] = useState<number>(0);
	const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
	const token = false;
	const anunciante = false;

	const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

	const handleClickdropDownProfile = () => {
		if (dropDown === 0) {
			setDropDown(1);
		} else {
			setDropDown(0);
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
						<Link href="#carros">Carros</Link>
						<Link href="#motos">Motos</Link>
						<Link href="#leilao">Leilão</Link>
					</DivNav>
					<Divise />
					<DivNav>
						{!token ? (
							<>
								<DivButton>
									<Button
										color={"brand1"}
										bgcolor={"grey10"}
										component={"big"}
										width={"133px"}
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
									>
										Cadastrar
									</Button>
								</DivButton>
							</>
						) : (
							<>
								<Profile
									onClick={() => handleClickdropDownProfile()}
								>
									<Avatar src={avatar} alt="avatar" />
									<Text>Samuel Leão</Text>
									{!anunciante ? (
										<>
											<DropDown dropdown={dropDown}>
												<Text>Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text>Sair</Text>
											</DropDown>
										</>
									) : (
										<>
											<DropDown dropdown={dropDown}>
												<Text>Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text>Meus Anúncios</Text>
												<Text>Sair</Text>
											</DropDown>
										</>
									)}
								</Profile>
							</>
						)}
						{isSideBarVisible && !token ? (
							<Sidebar isSideBarVisible={isSideBarVisible}>
								<Menu>
									<DivBar>
										<LinkBar href="#carros">Carros</LinkBar>
										<LinkBar href="#motos">Motos</LinkBar>
										<LinkBar href="#leilao">Leilão</LinkBar>
									</DivBar>
									<Divider />
									<DivBar>
										<LinkBar href="">Fazer Login</LinkBar>
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
										<LinkBar href="#carros">Carros</LinkBar>
										<LinkBar href="#motos">Motos</LinkBar>
										<LinkBar href="#leilao">Leilão</LinkBar>
									</DivBar>
									<Divider />
									<DivBar>
										<Settings>
											<Avatar src={avatar} alt="avatar" />
											<Text>Samuel Leão</Text>
										</Settings>
										{!anunciante ? (
											<>
												<Text>Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text>Sair</Text>
											</>
										) : (
											<>
												<Text>Editar Perfil</Text>
												<Text>Editar Endereço</Text>
												<Text>Meus Anúncios</Text>
												<Text>Sair</Text>
											</>
										)}
									</DivBar>
								</Menu>
							</Sidebar>
						)}
					</DivNav>
				</Nav>
			</StyledHeader>
		</>
	);
};

export default Header;
