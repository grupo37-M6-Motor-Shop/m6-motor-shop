import styled from "styled-components";
import { DropdownProps } from "../../interfaces/Dropdown/DropDown";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
`;

export const Link = styled.a`
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.75rem;
	color: var(--grey2);
	text-decoration: none;
`;

export const Divise = styled.div`
	height: 5rem;
	padding: .0625rem;
	background-color: var(--grey6);
`;

export const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2.75rem;
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
        padding: 22px;
        opacity: ${(props: DropdownProps) => props.dropdown};
        pointer-events: ${(props: DropdownProps) => props.dropdown === 0 ? `none` : `all`};
        transform: translate(-50%, 110%);
        transition: all 0.2s ease;
        z-index: 3;
		background: var(--grey9);
		box-shadow: 0rem .25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
		border-radius: .25rem;
`;

