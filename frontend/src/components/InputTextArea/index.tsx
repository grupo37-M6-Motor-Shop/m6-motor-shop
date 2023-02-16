import { FiAlertCircle } from "react-icons/fi";
import { TextAreaProps } from "../../interfaces/TextAreaProps/TextAreaProps";
import { CustomLabel, ErrorSpan } from "../Input/style";
import { CustomTextArea } from "./style";

const InputTextArea = ({
	label,
	errorMessage,
	width,
	error,
	offFocus,
	offBorder,
	...rest
}: TextAreaProps) => {
	return (
		<CustomLabel style={{ width: width }}>
			{label}
			<CustomTextArea {...rest} offFocus={offFocus} offBorder={offBorder} />
			{error && (
				<ErrorSpan>
					{errorMessage && <FiAlertCircle />}
					{errorMessage && errorMessage}
				</ErrorSpan>
			)}
		</CustomLabel>
	);
};

export default InputTextArea;
