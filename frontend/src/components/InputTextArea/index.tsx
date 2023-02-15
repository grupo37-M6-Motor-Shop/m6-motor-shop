import { FiAlertCircle } from "react-icons/fi";
import { TextAreaProps } from "../../interfaces/TextAreaProps/TextAreaProps";
import { CustomLabel, ErrorSpan } from "../Input/style";
import { CustomTextArea } from "./style";

const InputTextArea = ({ label, errorMessage, ...rest }: TextAreaProps) => {
	return (
		<div>
			<CustomLabel>
				{label}
				<CustomTextArea {...rest} />
				<ErrorSpan>
					{errorMessage && <FiAlertCircle />}
					{errorMessage && errorMessage}
				</ErrorSpan>
			</CustomLabel>
		</div>
	);
};

export default InputTextArea;
