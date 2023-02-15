import { CustomInput, CustomLabel, ErrorSpan } from "./style";
import { FiAlertCircle } from "react-icons/fi";
import { InputProps } from "../../interfaces/InputProps/InputProps";

const Input = ({ label, type, errorMessage, value, ...rest }: InputProps) => {
	return (
		<>
			<CustomLabel>
				{label}
				<CustomInput type={type} {...rest} />
				<ErrorSpan>
					{errorMessage && <FiAlertCircle />}
					{errorMessage && errorMessage}
				</ErrorSpan>
			</CustomLabel>
		</>
	);
};

export default Input;
