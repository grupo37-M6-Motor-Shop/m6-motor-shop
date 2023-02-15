import { useState } from "react";
import { CheckboxButtonProps } from "../../interfaces/CheckboxButtonProps/CheckboxButtonProps";
import { CheckboxButton, ContainerCheckboxButton } from "./style";

const InputCheckbox = ({
	label,
	name1,
	name2,
	checked,
	...rest
}: CheckboxButtonProps) => {
	const [checkbox1Value, setCheckbox1Value] = useState(false);
	const [checkbox2Value, setCheckbox2Value] = useState(false);

	const handleCheckbox1Change = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.checked) {
			setCheckbox2Value(false);
		}
		setCheckbox1Value(event.target.checked);
	};

	const handleCheckbox2Change = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.checked) {
			setCheckbox1Value(false);
		}
		setCheckbox2Value(event.target.checked);
	};

	return (
		<ContainerCheckboxButton>
			{label}
			<div className="container-inputs">
				<CheckboxButton checked={checkbox1Value}>
					{name1}
					<input
						type="checkbox"
						id={name1}
						checked={checkbox1Value}
						onChange={handleCheckbox1Change}
						{...rest}
					/>

					<span></span>
				</CheckboxButton>
				<CheckboxButton checked={checkbox2Value}>
					{name2}
					<input
						type="checkbox"
						id={name2}
						checked={checkbox2Value}
						onChange={handleCheckbox2Change}
						{...rest}
					/>

					<span></span>
				</CheckboxButton>
			</div>
		</ContainerCheckboxButton>
	);
};

export default InputCheckbox;
