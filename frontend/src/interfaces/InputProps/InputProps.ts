export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	type: string | "text";
	errorMessage?: string;
	value?: string;
}
