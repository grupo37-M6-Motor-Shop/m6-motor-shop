import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import InputCheckbox from "../InputCheckbox";
import InputTextArea from "../InputTextArea";
import Modal from "../modal";
import { Text, Div, Grid, GridFullWidth } from "./style";

interface AdditionalInputsProps {
	count: number;
}

const ModalAdCreate = () => {
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
					label={`${i}° Imagem da galeria`}
					type={'url'}
					placeholder={'Inserir URL da imagem'}
				/>
			);
		}

		return <div>{inputs}</div>;
	};
	return (
		<Modal title={'Criar anuncio'}>
			<InputCheckbox
				label={'Tipo de anuncio'}
				name1={'Venda'}
				name2={'Leilão'}
			/>
			<Text>Infomações do veículo</Text>
			<Input
				label={'Título'}
				type={'text'}
				placeholder={'Digitar título'}

			/>
			<Grid>
				<Input
					label={'Ano'}
					type={'number'}
					placeholder={'Digitar ano'}
				/>
				<Input
					label={'Quilometragem'}
					type={'number'}
					placeholder={'0'}
				/>

				<GridFullWidth>
					<Input
						label={'Preço'}
						type={'text'}
						placeholder={'Digitar preço'}
					/>
				</GridFullWidth>
			</Grid>
			<InputTextArea
				label={'Descrição'}
				placeholder={'Digitar descrição'}
			/>
			<InputCheckbox
				label={'Tipo de veículo'}
				name1={'Carro'}
				name2={'Moto'}
			/>
			<Text>Infomações do veículo</Text>
			<Input
				label={'Título'}
				type={'text'}
				placeholder={'Digitar título'}
			/>
			<Input
				label={'Imagem da capa'}
				type={'url'}
				placeholder={'Inserir URL da imagem'}
			/>
			<Input
				key={`gallery-input-1`}
				label={'1° Imagem da galeria'}
				type={'url'}
				placeholder={'Inserir URL da imagem'}
			/>
			<AdditionalInputs count={numInputs} />
			{numInputs < 6 && (
				<Button
					color={'brand1'}
					bgcolor={'brand4'}
					component={'medium'}
					width={'100%'}
					style={{ maxWidth: '315px' }}
					onClick={addInput}
				>
					Adicionar campo para imagem da galeria
				</Button>
			)}
			<Div>
				<Button
					color={'grey2'}
					bgcolor={'grey6'}
					component={'big'}
					width={'126px'}
				>
					Cancelar
				</Button>
				<Button
					color={'brand4'}
					bgcolor={'brand3'}
					component={'big'}
					width={'193px'}
				>
					Criar anúncio
				</Button>
			</Div>
		</Modal>
	);
};

export default ModalAdCreate;
