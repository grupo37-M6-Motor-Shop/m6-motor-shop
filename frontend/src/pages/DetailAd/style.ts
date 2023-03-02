import styled, { css } from "styled-components";
import { FontIntegerNormal } from "../../style/fonts";

interface DescriptionProps {
	align: "center" | "justify";
}

export const Container = styled.div`
	width: 100%;
	background-color: var(--grey8);
`;

export const Main = styled.main`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.75rem;
	gap: 2rem;

	@media screen and (min-width: 1240px) {
		max-width: 1240px;
		align-items: flex-start;
	}
`;

export const BackgroundContent = styled.div`
	width: 100%;
	min-height: 26rem;
	display: flex;
	justify-content: center;
	background: var(--brand1);
	position: absolute;

	@media screen and (min-width: 1240px) {
		min-height: 30rem;
	}
`;

export const ContainerInfo = styled.div`
	width: 100%;
	max-width: 1240px;
	margin-top: 2rem;
	z-index: 2;
	gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 1250px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

export const InfoAd = styled.div`
	width: 100%;
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 47rem;
`;

export const Image = styled.div`
	width: 100%;
	height: 20rem;
	border-radius: 0.25rem;
	background-color: var(--whiteFixed);

	> img {
		width: 100%;
		height: 100%;
		object-fit: scale-down;
		border-radius: 0.5rem;
	}
`;

export const InfoVehicle = styled.div`
	background-color: var(--whiteFixed);
	padding: 2rem;
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const Description = styled.div<DescriptionProps>`
	border-radius: 0.25rem;
	background-color: var(--whiteFixed);
	padding: 2rem;
	color: var(--grey2);
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	text-align: ${({ align }) => (align === "center" ? "center" : "justify")};
`;

export const Title = styled.p`
	color: var(--grey1);
	font-weight: 600;
	font-size: 1.25rem;
`;

export const ContainerPriceYearKm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (min-width: 550px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const InfoKmYear = styled(FontIntegerNormal)`
	background-color: red;
	padding: 4px 8px;
	margin-right: 12px;
	border-radius: 4px;
	background: var(--brand4);
	color: var(--brand1);
`;

export const FontPrice = styled.div`
	font-weight: 500;
`;

export const InfoAdvertiser = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	border-radius: 0.25rem;
	display: flex;
	gap: 1rem;
	max-width: 47rem;

	@media screen and (min-width: 1250px) {
		max-width: 27rem;
	}
`;

export const Info = styled.div`
	width: 100%;
	border-radius: 0.25rem;
	background-color: var(--grey10);
	padding: 1rem 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 1rem;
`;

export const UserImg = styled.div`
	background-color: var(--random2);
	min-height: 5rem;
	min-width: 5rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 2rem;
	color: var(--whiteFixed);
`;

export const Name = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.25rem;
`;

export const ContainerComments = styled.div`
	width: 100%;
	max-width: 1240px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media screen and (min-width: 1250px) {
		max-width: 750px;
	}
`;

export const Comments = styled.div`
	width: 100%;
	max-width: 46.875rem;
	display: flex;
	flex-direction: column;
	background-color: var(--whiteFixed);
	padding: 1rem 1.5rem;
	gap: 2rem;
	border-radius: 0.25rem;
`;

export const ZoomImg = styled.img`
	max-width: 29.0625rem;
	max-height: 15rem;
`;
