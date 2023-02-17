import { StyledHeader, Image, Link, Nav, Div, Divise, Text, Avatar, Profile, DropDown } from "./style";
import logo from '../../../public/img/motor_shop_logo_header.svg'
import avatar from '../../../public/img/avatar.svg'
import Button from "../Button";
import { useState } from "react";

const Header = () => {
	const [dropDown, setDropDown] = useState(0)
	const token = false
	const anunciante = false

	const handleClickdropDownProfile = () => {
		if (dropDown === 0) {
			setDropDown(1)
		} else {
			setDropDown(0)
		}
	}
	console.log(dropDown)

	return (
		<>
			<StyledHeader>
				<Image src={logo} alt='logo-motor-shop' />
				<Nav>
					<Div>
						<Link href="#carros">Carros</Link>
						<Link href="#motos">Motos</Link>
						<Link href="#leilao">Leilão</Link>
					</Div>
					<Divise />
					<Div>
						{token ? (
							<>
								<Button
									color={'brand1'}
									bgcolor={'grey10'}
									component={'big'}
									width={'133px'}
								>Fazer Login
								</Button>
								<Button
									color={'grey0'}
									bgcolor={'grey10'}
									component={'big'}
									border={'grey4'}
									width={'133px'}
								>Cadastrar
								</Button>
							</>
						) : (
							<>
								<Profile onClick={() => handleClickdropDownProfile()}>
									<Avatar src={avatar} alt='avatar' />
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

					</Div>
				</Nav>
			</StyledHeader>
		</>
	);
};

export default Header;
