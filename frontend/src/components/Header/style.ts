import styled from "styled-components";
import { DropdownProps } from "../../interfaces/DropdownProps/DropDownProps";
import { SidebarProps } from "../../interfaces/SidebarProps/SidebarProps";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
  position: fixed;
	width: 100%;
	height: 5rem;
	background-color: var(--grey10);
	padding: 0 3.125rem;
	font-family: "Inter", sans-serif;
	border-bottom: .125rem solid var(--grey6);
`;

export const Image = styled.img`

`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2.75rem;
  @media (max-width: 900px) {
    justify-content: center;
    gap: 0rem;
	}
`;

export const MenuBurger = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    width: 2rem;
    height: 1.5rem;
    cursor: pointer;
    right: 2rem;
    top: 2rem;
    z-index: 20;
	}
`;

export const MenuAnimation = styled.span<SidebarProps>`
  width: 100%;
  height: .25rem;
  background-color: ${(props) => (props.isSideBarVisible ? "transparent" : "black")};
  border-radius: .75rem;
  display: block;
  transition: background-color 0.5s ease-in-out;
  :before,:after {
    content: "";
    width: 100%;
    background-color: black;
    display: block;
    transition: all 0.5s ease-in-out;
    border-radius: .75rem;
    height: .25rem;
  }
  :before {
    transform: ${(props) => (props.isSideBarVisible ? "rotateZ(-45deg) translateY(0)" : "translateY(-0.625rem)")};
  }
  :after {
    transform: ${(props) => (props.isSideBarVisible ? "rotateZ(45deg) translateY(0)" : "translateY(.625rem)")};
    margin-top: -0.25rem;
  }
`;

export const Link = styled.a`
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.75rem;
	color: var(--grey2);
	text-decoration: none;
  @media (max-width: 900px) {
		display: none;
	}
`;

export const Divise = styled.div`
	height: 5rem;
	padding: .0625rem;
	background-color: var(--grey6);
  @media (max-width: 900px) {
		display: none;
	}
`;

export const DivNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2.75rem;
`;

export const DivButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2.75rem;
  @media (max-width: 900px) {
		display: none;
	}
`;

export const Avatar = styled.img`

`;

export const Text = styled.p`
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.75rem;
	color: var(--grey2);
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: .3125rem;
	cursor: pointer;
	position: relative;
  @media (max-width: 900px) {
		display: none;
	}
`;

export const DropDown = styled.div<DropdownProps>`
    display: flex;
		flex-direction: column;
    position: absolute;
		gap: 1rem;
    bottom: 0rem;
    width: 12.5rem;
    height:min-content;
    left: 53%;
    padding: 2.125rem;
    opacity: ${(props: DropdownProps) => props.dropdown};
    pointer-events: ${(props: DropdownProps) => props.dropdown === 0 ? `none` : `all`};
    transform: translate(-50%, 110%);
    transition: all 0.2s ease;
    z-index: 3;
		background: var(--grey9);
		box-shadow: 0rem .25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
		border-radius: .25rem;
    @media (max-width: 900px) {
		  display: none;
	  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const Input = styled.input`
  @media (max-width: 900px) {
    display: none;  
  }
`;

export const Divider = styled.div`
    width:100vw;
    height: .1rem;
    background-color: var(--grey6);
`;

export const Sidebar = styled.div<SidebarProps>`
   display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 5rem;
    left: 0;
    position: fixed;
    z-index: 3;
    opacity: ${(props) => (props.isSideBarVisible ? "1" : "0")};
    border-top: .2rem solid var(--grey6);
    background: var(--whiteFixed);
  }
`;

export const DivBar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 2.1875rem;
`;

export const LinkBar = styled.a`
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.75rem;
	color: var(--grey2);
	text-decoration: none;
`;

export const Settings = styled.div`
  display: flex;
	align-items: center;
	gap: .3125rem;
	cursor: pointer;
	position: relative;
`;
