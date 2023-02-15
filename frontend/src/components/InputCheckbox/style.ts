import styled from "styled-components";
import { CheckboxButtonProps } from "../../interfaces/CheckboxButtonProps/CheckboxButtonProps";

export const ContainerCheckboxButton = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.125rem;
	font-size: 0.875rem;
	font-weight: 500;

	.container-inputs {
		display: flex;
		gap: 0.625rem;
	}
`;

export const CheckboxButton = styled.label<CheckboxButtonProps>`
	display: inline-block;
	width: 100%;
	text-align: center;
	font-size: 1rem;
	font-weight: 500;
	background-color: ${({ checked }) =>
		checked ? "var(--brand1)" : "transparent"};
	color: ${({ checked }) => (checked ? "var(--whiteFixed)" : "var(--grey0)")};
	border: ${({ checked }) =>
		checked ? "0.125rem solid transparent" : "0.125rem solid var(--grey4)"};
	border-radius: 0.25rem;
	padding: 0.625rem;
	margin-bottom: 1.5rem;
	cursor: pointer;

	:hover {
		background-color: ${({ checked }) =>
			checked ? "var(--brand2)" : null};
	}

	> input {
		display: none;
	}
`;
