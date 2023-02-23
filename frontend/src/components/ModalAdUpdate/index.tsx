import { useState } from "react";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import InputCheckbox from "../InputCheckbox";
import InputTextArea from "../InputTextArea";
import Modal from "../modal";
import { Div, Grid, GridFullWidth } from "../ModalAdCreate/style";
import { InfoSpan } from "./style";

interface AdditionalInputsProps {
	count: number;
}

const ModalAdUpdate = () => {
	const [numInputs, setNumInputs] = useState(1);
	document.body.style.overflow = "hidden";

	const addInput = () => {
		if (numInputs < 6) {
			setNumInputs(numInputs + 1);
		}
	};

	const AdditionalInputs = ({ count }: AdditionalInputsProps) => {
		const inputs = [];

		for (let i = 2; i <= count; i++) {
			inputs.push(
				<Input
					key={`gallery-input-${i}`}
					name={`urlImage${i}`}
					label={`${i}° Imagem da galeria`}
					type="text"
					placeholder="https://image.com"
					defaultValue={""}
				/>
			);
		}

		return <div>{inputs}</div>;
	};

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
					defaultValue={""}
				/>
				<Grid>
					<Input
						name="year"
						type="number"
						label="Ano"
						defaultValue={""}
						placeholder="Digitar ano"
					/>
					<Input
						name="miliage"
						type="number"
						label="Quilometragem"
						defaultValue={""}
						placeholder="0"
					/>
					<GridFullWidth>
						<Input
							name="price"
							type="text"
							label="Preço"
							defaultValue={""}
							placeholder="Digitar preço"
						/>
					</GridFullWidth>
				</Grid>
				<InputTextArea
					name="description"
					label="Descrição"
					error
					defaultValue={""}
					placeholder="Digitar descrição"
				/>
				<InputCheckbox
					name="typeVehicle"
					label="Tipo de veículo"
					name1="Carro"
					name2="Moto"
				/>
				<InputCheckbox
					name="isActive"
					label="Publicado"
					name1="Sim"
					name2="Não"
				/>
				<Input
					name="urlCoverImage"
					label="Imagem da capa"
					type="text"
					placeholder="https://image.com"
					defaultValue={""}
				/>
				<Input
					name="urlImage1"
					label="1º imagem da galeria"
					type="text"
					placeholder="https://image.com"
					defaultValue={""}
				/>
				<AdditionalInputs count={numInputs} />
				{numInputs < 6 && (
					<Button
						type="button"
						color="brand1"
						bgcolor="brand4"
						component="medium"
						width="100%"
						style={{ maxWidth: "315px" }}
						onClick={addInput}
					>
						Adicionar campo para imagem da galeria
					</Button>
				)}
				<Div>
					<Button
						type="button"
						color="grey2"
						bgcolor="grey6"
						component="big"
						width="100%"
					>
						Excluir anúncio
					</Button>
					<Button
						type="submit"
						color="whiteFixed"
						bgcolor="brand1"
						component="big"
						width="100%"
						hover={{ bgcolor: "brand2" }}
					>
						Salvar alterações
					</Button>
				</Div>
			</Form>
		</Modal>
	);
};

export default ModalAdUpdate;
