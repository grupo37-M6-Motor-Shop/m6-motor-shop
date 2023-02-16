export interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	errorMessage?: string;
	width?: string;
	error?: boolean;
	offBorder?: boolean;
	offFocus?: boolean;
}
