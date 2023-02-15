import { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Card, Children, Container, Content, Title } from "./style";

interface IModal {
	title: string;
	children: ReactNode;
}

const Modal = ({ title, children }: IModal) => {
	return (
		<Container>
			<Card>
				<Title>
					{title}
					<IoCloseOutline size={24} />
				</Title>
				<Content>
					<Children>{children}</Children>
				</Content>
			</Card>
		</Container>
	);
};

export default Modal;
