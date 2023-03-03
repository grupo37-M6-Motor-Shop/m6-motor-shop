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
  DivProfile,
} from "./style";
import logo from "../../assets/img/motor_shop_logo_header.svg";
import Button from "../Button";
import { useContext, useState } from "react";
import { MotorShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
import ModalEditUser from "../ModalEditUser";
import ModalEditAddressUser from "../ModalEditAddressUser";
import ModalDeleteUser from "../ModalDeleteUser";

const Header = ({ auction, colorFont, image }: any) => {
  const [dropDown, setDropDown] = useState<number>(0);
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);
  const {
    isLoggedIn,
    user: { id, name, advertiser, avatarColor },
    getUserByProfile,
    modalEditUser,
    setModalEditUser,
    openModalUpdateAddresUser,
    setOpenModalUpdateAddresUser,
    openModalDeleteUser,
    logout,
  } = useContext(MotorShopContext);
  const navigate = useNavigate();
  const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

  const handleClickProfile = async () => {
    await getUserByProfile();
    navigate(`/profile/${id}`);
  };

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
        <FontTwoLatters>{`${first}${second}`.toUpperCase()}</FontTwoLatters>
      );
    }
  };

  return (
    <>
      <StyledHeader>
        <Image
          src={logo}
          alt="logo-motor-shop"
          onClick={() => navigate("/homepage")}
        />
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
            {!isLoggedIn ? (
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
                    hover={{ bgcolor: "grey1", color: "whiteFixed" }}
                    onClick={() => navigate(`/register`)}
                  >
                    Cadastrar
                  </Button>
                </DivButton>
              </>
            ) : (
              <>
                <Profile>
                  <ContainerUser onClick={() => handleClickdropDownProfile()}>
                    <UserImg colorRandom={avatarColor}>
                      {image ? image : twoLetters()}
                    </UserImg>
                    <FontUserName auction={auction} colorFont={colorFont}>
                      {name}
                    </FontUserName>
                  </ContainerUser>
                  {!advertiser ? (
                    <>
                      <DropDown dropdown={dropDown}>
                        <Text
                          onClick={() => {
                            handleClickdropDownProfile();
                            setModalEditUser(true);
                          }}
                        >
                          Editar Perfil
                        </Text>
                        <Text
                          onClick={() => {
                            handleClickdropDownProfile();
                            setOpenModalUpdateAddresUser(true);
                          }}
                        >
                          Editar Endereço
                        </Text>
                        <Text
                          onClick={() => {
                            logout();
                            handleClickdropDownProfile();
                          }}
                        >
                          Sair
                        </Text>
                      </DropDown>
                    </>
                  ) : (
                    <>
                      <DropDown dropdown={dropDown}>
                        <Text
                          onClick={() => {
                            handleClickdropDownProfile();
                            setModalEditUser(true);
                          }}
                        >
                          Editar Perfil
                        </Text>
                        <Text
                          onClick={() => {
                            handleClickdropDownProfile();
                            setOpenModalUpdateAddresUser(true);
                          }}
                        >
                          Editar Endereço
                        </Text>
                        <Text onClick={handleClickProfile}>Meus Anúncios</Text>
                        <Text
                          onClick={() => {
                            logout();
                            handleClickdropDownProfile();
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
            {isSideBarVisible && !isLoggedIn ? (
              <Sidebar isSideBarVisible={isSideBarVisible}>
                <Menu>
                  <DivBar>
                    <LinkBar href="/homepage#carros">Carros</LinkBar>
                    <LinkBar href="/homepage#motos">Motos</LinkBar>
                    <LinkBar href="/homepage#leilao">Leilão</LinkBar>
                  </DivBar>
                  <Divider />
                  <DivBar>
                    <LinkBar href="/login">Fazer Login</LinkBar>
                    <Button
                      color={"grey0"}
                      bgcolor={"grey10"}
                      component={"big"}
                      border={"grey4"}
                      width={"fullWidth"}
                      hover={{ bgcolor: "grey1", color: "whiteFixed" }}
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
                    <LinkBar href="/homepage#carros">Carros</LinkBar>
                    <LinkBar href="/homepage#motos">Motos</LinkBar>
                    <LinkBar href="/homepage#leilao">Leilão</LinkBar>
                  </DivBar>
                  <Divider />
                  <DivBar>
                    <Settings>
                      <ContainerUser>
                        <UserImg colorRandom={avatarColor}>
                          {image ? image : twoLetters()}
                        </UserImg>
                        <FontUserName auction={auction} colorFont={colorFont}>
                          {name}
                        </FontUserName>
                      </ContainerUser>
                    </Settings>
                    {!advertiser ? (
                      <>
                        <Text
                          onClick={() => {
                            handleClickdropDownProfile();
                            setModalEditUser(true);
                          }}
                        >
                          Editar Perfil
                        </Text>
                        <Text>Editar Endereço</Text>
                        <Text onClick={logout}>Sair</Text>
                      </>
                    ) : (
                      <>
                        <Text
                          onClick={() => {
                            handleClickdropDownProfile();
                            setModalEditUser(true);
                          }}
                        >
                          Editar Perfil
                        </Text>
                        <Text>Editar Endereço</Text>
                        <Text onClick={handleClickProfile}>Meus Anúncios</Text>
                        <Text onClick={logout}>Sair</Text>
                      </>
                    )}
                  </DivBar>
                </Menu>
              </Sidebar>
            )}
          </DivProfile>
        </Nav>
      </StyledHeader>
      {modalEditUser && <ModalEditUser />}
      {openModalUpdateAddresUser && <ModalEditAddressUser />}
      {openModalDeleteUser && <ModalDeleteUser />}
    </>
  );
};

export default Header;
