import { useState } from "react";
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
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [defaultValue, setDefaultValue] = useState("");

	return (
		<Container>
			{isLoggedIn && <Detail name="João da Silva" />}
			<Form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "15px",
				}}
			>
				<InputWrapper>
					<InputTextArea
						placeholder="Digitar comentário"
						width="100%"
						style={{ height: "8rem", margin: 0 }}
						defaultValue={defaultValue}
						offFocus
						offBorder
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
