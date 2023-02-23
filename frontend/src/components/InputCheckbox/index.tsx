import React from "react";
import { useState } from "react";
import { CheckboxButtonProps } from "../../interfaces/CheckboxButtonProps/CheckboxButtonProps";
import {
	CheckboxButton,
	ContainerCheckboxButton,
	ContainerInputs,
	CustomInput,
} from "./style";

const InputCheckbox = React.forwardRef(
	(
		{
			label,
			name1,
			name2,
			checked,
			register,
			error,
			...rest
		}: CheckboxButtonProps,
		ref
	) => {
		const [checkbox1Value, setCheckbox1Value] = useState(checked || false);
		const [checkbox2Value, setCheckbox2Value] = useState(false);

		const handleCheckbox1Change = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			if (event.target.checked) {
				setCheckbox2Value(false);
			}
			setCheckbox1Value(event.target.checked);
			console.log(event.target.value);
		};

		const handleCheckbox2Change = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			if (event.target.checked) {
				setCheckbox1Value(false);
			}
			setCheckbox2Value(event.target.checked);
			console.log(event.target.value);
		};

		return (
			<ContainerCheckboxButton>
				{label}
				<ContainerInputs>
					<CheckboxButton checked={checkbox1Value}>
						{name1}
						<CustomInput
							type="checkbox"
							id={name1}
							checked={checkbox1Value}
							value={"Venda"}
							// onChange={handleCheckbox1Change}
							{...rest}
							// {...register!("Venda")}
						/>

						<span></span>
					</CheckboxButton>
					<CheckboxButton checked={checkbox2Value}>
						{name2}
						<CustomInput
							type="checkbox"
							id={name2}
							checked={checkbox2Value}
							value={"Leilão"}
							// onChange={handleCheckbox2Change}
							{...rest}
							// {...register!("Venda")}
						/>

						<span></span>
					</CheckboxButton>
				</ContainerInputs>
			</ContainerCheckboxButton>
		);
	}
);

export default InputCheckbox;
