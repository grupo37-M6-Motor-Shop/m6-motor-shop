import Form from "../Form";
import Input from "../Input";
import InputCheckbox from "../InputCheckbox";
import InputTextArea from "../InputTextArea";
import Modal from "../Modal";
import { InfoSpan } from "./style";

const ModalAdUpdate = () => {
	return (
		<Modal title="Editar Anúncio">
			<Form>
				<InputCheckbox
					name="typeAd"
					label="Tipo de anúncio"
					name1="Venda"
					name2="Leilão"
				/>
				<InfoSpan>Informações do veículo</InfoSpan>
				<Input
                    name="title"
					label="Título"
					type="text"
					placeholder="Digitar título"
					errorMessage={"errors"}
					defaultValue={""}
				/>
                <div>
                    <Input name="year" type="number" label="Ano"/>
                    <Input name="miliage" type="number" label="Quilometragem"/>
                    <Input name="price" type="text" label="Preço"/>
                </div>
                <InputTextArea name="description" label="Descrição" error />
                <InputCheckbox name="typeVehicle" label="Tipo de veículo" name1="Carro" name2="Moto"/>
                <InputCheckbox name="isActive" label="Publicado" name1="Sim" name2="Não"/>
                <Input
                    name="title"
					label="Título"
					type="text"
					placeholder="Digitar título"
					errorMessage={"errors"}
					defaultValue={""}
				/>
			</Form>
		</Modal>
	);
};

export default ModalAdUpdate;
