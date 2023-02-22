import Button from "../Button";
import Modal from "../Modal";
import { TextQuestion, TextWarning, Div } from "./style";

const ModalDelete = () => {
	return (
		<Modal title={'Excluir anúncio'}>
			<TextQuestion>Tem certeza que deseja remover este anúncio?</TextQuestion>
			<TextWarning>
				Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
			</TextWarning>
			<Div>
				<Button
					color={'grey2'}
					bgcolor={'grey6'}
					component={'big'}
					width={'126px'}
				>Cancelar
				</Button>
				<Button
					color={'alert1'}
					bgcolor={'alert2'}
					component={'big'}
					width={'211px'}
				>Sim, exluir anúncio
				</Button>
			</Div>
		</Modal>
	);
};

export default ModalDelete;
