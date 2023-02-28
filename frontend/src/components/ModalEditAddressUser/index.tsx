import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MotorShopContext } from "../../context";
import { FormUpdateAddressUser } from "../../interfaces/FormUpdateAddressUser/FormUpdateAddressUser";
import { Fieldset } from "../../pages/Register/styles";
import { schemaUpdateAddressUser } from "../../validations/FormUpdateAddressUser";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Modal from "../modal";
import { Div } from "../ModalAdCreate/style";

const ModalEditAddressUser = () => {
	const { user, updateAddressUser, handleCloseModal } =
		useContext(MotorShopContext);

	useEffect;
	const { address } = user;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormUpdateAddressUser>({
		resolver: yupResolver(schemaUpdateAddressUser),
	});

	const newUpdateAddressUser = (data: FormUpdateAddressUser) => {
		updateAddressUser(data, address.id);
	};

	return (
		<Modal title="Editar endereço">
			<Form onSubmit={handleSubmit(newUpdateAddressUser)}>
				<Fieldset>
					<p>Informações pessoais</p>
					<Input
						label="CEP"
						type="text"
						placeholder="00000.000"
						defaultValue={address.cep}
						register={register}
						name="cep"
						error={errors.cep}
					/>
					<Div style={{ padding: 0 }}>
						<Input
							label="Estado"
							type="text"
							placeholder="Paraná"
							defaultValue={address.state}
							register={register}
							name="state"
							error={errors.state}
						/>
						<Input
							label="Cidade"
							type="text"
							placeholder="Curitiba"
							defaultValue={address.city}
							register={register}
							name="city"
							error={errors.city}
						/>
					</Div>
					<Input
						label="Rua"
						type="text"
						placeholder="Rua do paraná"
						defaultValue={address.street}
						register={register}
						name="street"
						error={errors.street}
					/>
					<Div style={{ padding: 0 }}>
						<Input
							label="Número"
							type="text"
							placeholder="1029"
							defaultValue={address.number}
							register={register}
							name="number"
							error={errors.number}
						/>
						<Input
							label="Complemento"
							type="text"
							placeholder="Apart 12"
							defaultValue={address.complement}
							register={register}
							name="complement"
							error={errors.complement}
						/>
					</Div>
				</Fieldset>
				<Div>
					<Button
						type="button"
						color={"grey2"}
						bgcolor={"grey6"}
						component={"big"}
						width={"126px"}
						hover={{ bgcolor: "grey5" }}
						onClick={handleCloseModal}
					>
						Cancelar
					</Button>
					<Button
						type="submit"
						color={"whiteFixed"}
						bgcolor={"brand1"}
						component={"big"}
						width={"193px"}
						hover={{ bgcolor: "brand2" }}
					>
						Salvar alterações
					</Button>
				</Div>
			</Form>
		</Modal>
	);
};

export default ModalEditAddressUser;
