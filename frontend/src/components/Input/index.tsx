import { CustomInput, CustomLabel, ErrorSpan } from "./style";
import { FiAlertCircle } from "react-icons/fi";
import { InputProps } from "../../interfaces/InputProps/InputProps";
import React from "react";

const Input = React.forwardRef(
	({ label, value, register, error, name, ...rest }: InputProps, ref) => {
		return (
			<>
				<CustomLabel>
					{label}
					<CustomInput {...rest} {...register(name)} />
					<ErrorSpan>
						{error?.message && <FiAlertCircle />}
						{error?.message && error.message}
					</ErrorSpan>
				</CustomLabel>
			</>
		);
	}
);

export default Input;
