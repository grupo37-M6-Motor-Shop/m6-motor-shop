import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { MotorShopContext } from "../../context";
import { FormCreateComment } from "../../interfaces/FormCreateComment/FormCreateComment";
import { schemaCreateComment } from "../../validations/FormCreateComment";
import Button from "../Button";
import Detail from "../Detail";
import Form from "../Form";
import InputTextArea from "../InputTextArea";
import {
	ButtonWrapper,
	Container,
	InputWrapper,
	Span,
	SpansWrapper,
} from "./style";

const InputComment = () => {
	const { isLoggedIn, user, createComment, ad } =
		useContext(MotorShopContext);
	const [defaultValue, setDefaultValue] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormCreateComment>({
		resolver: yupResolver(schemaCreateComment),
	});

	const handleClick = (data: FormCreateComment) => {
		const { description } = data;
		const newData = {
			description: defaultValue === "" ? description : defaultValue,
			adId: ad.id,
		};
		createComment(newData);
		setDefaultValue("");
	};

	return (
		<Container>
			{isLoggedIn && <Detail name={user.name} />}
			<Form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "15px",
				}}
				onSubmit={handleSubmit(handleClick)}
			>
				<InputWrapper>
					<InputTextArea
						name="description"
						placeholder="Digitar comentário"
						width="100%"
						style={{ height: "8rem", margin: 0 }}
						value={defaultValue !== "" ? defaultValue : undefined}
						offFocus
						offBorder
						register={register}
						error={errors.description}
					/>
					<ButtonWrapper>
						<Button
							type="submit"
							component="medium"
							bgcolor="brand1"
							color="whiteFixed"
							width="fullWidth"
							disabled={!isLoggedIn}
						>
							Comentar
						</Button>
					</ButtonWrapper>
				</InputWrapper>
				<SpansWrapper>
					<Span onClick={() => setDefaultValue("Gostei muito!")}>
						Gostei muito!
					</Span>
					<Span onClick={() => setDefaultValue("Incrível")}>
						Incrível
					</Span>
					<Span
						onClick={() =>
							setDefaultValue("Recomendarei para meus amigos!")
						}
					>
						Recomendarei para meus amigos!
					</Span>
				</SpansWrapper>
			</Form>
		</Container>
	);
};

export default InputComment;
