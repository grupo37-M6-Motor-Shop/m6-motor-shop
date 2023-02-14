import styled from "styled-components";
import { ButtonProps } from "../../interfaces/ButtonProps/ButtonProps";

export const CustomButton = styled.button<ButtonProps>`
	width: ${({ width }) => (width === "fullWidth" ? "100%" : null)};
	color: ${({ color }) => (color ? `var(--${color})` : null)};
	background-color: ${({ bgcolor }) =>
		bgcolor ? `var(--${bgcolor})` : null};
	padding: ${({ component }) =>
		component === "big"
			? "0.75rem"
			: component === "medium"
			? "0.4375rem"
			: null};
	font-size: ${({ component }) =>
		component === "big"
			? "1rem"
			: component === "medium"
			? "0.875rem"
			: null};
	font-weight: 600;
	border: ${({ border }) =>
		border ? `0.0938rem solid var(--${border})` : "none"};

	:hover:not([disabled]) {
		background-color: ${({ hover }) =>
			hover?.bgcolor ? `var(--${hover.bgcolor})` : null};
		color: ${({ hover }) =>
			hover?.color ? `var(--${hover.color})` : null};
		border: ${({ hover }) =>
			hover?.border ? `0.0938rem solid var(--${hover.border})` : null};
	}

	:disabled {
		opacity: 0.5;
	}
`;
