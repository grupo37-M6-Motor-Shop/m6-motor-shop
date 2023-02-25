import styled, { css } from "styled-components";
import { FontIntegerNormal } from "../../style/fonts";

interface props {
	colorRandom?: string;
	auction?: boolean;
	image?: string;
	isActive?: boolean;
}

export const FontCardDescription = styled(FontIntegerNormal)<props>`
	min-height: calc(2em + 20px);
	font-weight: 400;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	${(props) =>
		props.auction &&
		`
		min-height: calc(2em + 52px);
		color: var(--grey5); 
		font-size: 16px;
		line-height: 28px;
		-webkit-line-clamp: 1;

		@media screen and (max-width: 1024px) {
			-webkit-line-clamp: 3;
		}
  `}
`;
export const FontCardTitle = styled.span<props>`
	font-weight: 600;
	font-size: 16px;
	min-height: calc(2em + 10px);

	${(props) =>
		props.auction &&
		`
    color: var(--whiteFixed); 
    font-size: 20px;
    line-height: 25px;
  `}
`;
export const FontPrice = styled(FontCardTitle)`
	font-weight: 500;
`;

export const CustomLi = styled.li<props>`
	width: 100%;
	${(props) => (props.auction ? "max-width: 735px;" : "max-width: 312px;")}
	min-width: 312px;
	list-style: none;
`;

export const ContainerInfoCard = styled.div<props>`
	${(props) =>
		props.auction &&
		`
    background-image: url("${props.image}");
    background-position: center;
    background-size: cover;
    `}
	cursor: pointer
`;

export const InfoCard = styled(ContainerInfoCard)`
	padding: 16px 0;
	display: flex;
	flex-direction: column;
	gap: 16px;

	${(props) =>
		props.auction &&
		`
    padding: 24px 5%;
    color: var(--whiteFixed); 
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  `}
`;

export const Clock = styled.div`
	display: flex;
	align-items: center;
	max-width: 123px;
	padding: 6px;
	gap: 10px;
	background-color: var(--whiteFixed);
	border-radius: 32px;
	color: black;
	margin-bottom: 30px;

	@media (min-width: 400px) {
		margin-bottom: 54px;
	}
`;

export const ContainerCarImg = styled.div`
	height: 152px;
	width: 312px;
	display: flex;
	justify-content: center;
	background-color: var(--grey7);
	position: relative;
	cursor: pointer;
	border: 2px solid transparent;

	:hover {
		border: 2px solid var(--brand1);
	}
`;

export const CarImg = styled.img`
	object-fit: scale-down;
`;

export const ContainerPriceYearKm = styled.div<props>`
	display: flex;
	justify-content: space-between;

	${(props) =>
		props.auction &&
		css`
			flex-direction: column;
			gap: 20px;

			@media (min-width: 1710px) {
				flex-direction: row;
			}
		`}
`;

export const InfoKmYear = styled(FontIntegerNormal)`
	background-color: red;
	padding: 4px 8px;
	margin-right: 12px;
	border-radius: 4px;
	background: var(--brand4);
	color: var(--brand1);
`;

export const ButtonAuction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--brand1);
	line-height: 0px;
	color: var(--whiteFixed);
	padding: 25px 5.1%;
	border-radius: 0 0 6px 6px;
`;
export const RightArrow = styled.img`
	width: 26px;
	height: 14px;
`;

export const IsActiveInfo = styled.div<props>`
	top: 10px;
	left: 24px;
	position: absolute;
	background-color: ${(props) =>
		props.isActive ? "var(--brand1)" : "var(--grey4)"};
	color: var(--whiteFixed);
	font-weight: 500;
	font-size: 14px;
	padding: 5px 7px;
`;
