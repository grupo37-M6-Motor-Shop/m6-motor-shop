import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputChoicesProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    choice1: string
    choice2: string
    register: UseFormRegister<any>;
	error?: FieldError | undefined;
}