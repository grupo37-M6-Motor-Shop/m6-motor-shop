import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 46.875rem;
	min-height: 18.125rem;
	display: flex;
	flex-wrap: wrap;
	padding: 2.25rem 1.625rem;
	background-color: var(--grey10);
	border-radius: 0.25rem;
	gap: 1.5rem;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		border: 0.125rem solid var(--grey7);
		border-radius: 0.25rem;
		background-color: var(--whiteFixed);
	}
`;

export const ButtonWrapper = styled.div`
	width: 6.75rem;
	position: relative;

	@media screen and (min-width: 768px) {
		> button {
			position: absolute;
			right: 0.625rem;
			bottom: 0.625rem;
		}
	}
`;

export const SpansWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;
export const Span = styled.span`
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 12px;
	color: var(--grey3);
	background-color: var(--grey7);
	border-radius: 24px;
	padding: 0 12px;
	height: 24px;
	display: flex;
	align-items: center;

	:hover {
		background-color: var(--grey5);
		cursor: pointer;
	}
`;
