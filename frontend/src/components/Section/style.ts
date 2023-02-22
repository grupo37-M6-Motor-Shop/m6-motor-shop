import styled from "styled-components";

export const CustonSection = styled.section`
	padding: 40px 0 40px 12px;
	display: flex;
	flex-direction: column;
	/* gap: 40px; */

	@media screen and (min-width: 1024px) {
		padding: 40px 0 40px 60px;
	}
`;

export const TitleSection = styled.h5`
	font-size: 24px;
	font-weight: 600;
	color: black;
`;
export const ListCards = styled.ul`
	padding: 3rem;
	display: flex;
	gap: 12px;
	overflow-x: auto;

	@media screen and (min-width: 768px) {
		gap: 48px;
	}
`;