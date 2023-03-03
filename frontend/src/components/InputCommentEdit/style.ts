import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 46.875rem;
	display: flex;
	flex-wrap: wrap;
	background-color: var(--grey10);
	border-radius: 0.25rem;
	gap: 1.5rem;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
	> label {
		border: 0.125rem solid var(--grey7);
		border-radius: 0.25rem;
		background-color: var(--whiteFixed);
	}

	@media screen and (max-width: 768px) {
		> label {
		border: none;
	}
	}
`;

export const ButtonWrapper = styled.div`
	width: 15.45rem;
	position: relative;
	display: flex;
	gap: .625rem;
	@media screen and (max-width: 425px) {
		width: 100%;
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
