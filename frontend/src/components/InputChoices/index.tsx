import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { InputChoicesProps } from "../../interfaces/InputChoices/InputChoices";
import Button from "../Button";
import { CustomLabel, ErrorSpan } from "../Input/style";

const InputChoices = React.forwardRef(
	(
		{
			label,
			name,
			choice1,
			choice2,
			register,
			error,
			setSelectedValue,
			value,
			...rest
		}: InputChoicesProps,
		ref
	) => {


		return (
			<CustomLabel style={{ display: "flex", flexDirection: "column" }}>
				{label}
				<div
					style={{ display: "flex", gap: "20px", paddingTop: "15px" }}
				>
					<Button
						type="button"
						component="big"
						color="grey0"
						bgcolor="tranparent"
						border="grey4"
						width="100%"
						onClick={() => setSelectedValue(choice1)}
					>
						{choice1}
					</Button>
					<Button
						type="button"
						component="big"
						color="grey0"
						bgcolor="tranparent"
						border="grey4"
						width="100%"
						onClick={() => setSelectedValue(choice2)}
					>
						{choice2}
					</Button>
				</div>
				<ErrorSpan style={{ marginTop: "5px" }}>
					{error?.message && <FiAlertCircle />}
					{error?.message && error.message}
				</ErrorSpan>
			</CustomLabel>
		);
	}
);

export default InputChoices;
