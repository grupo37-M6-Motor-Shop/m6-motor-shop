import * as yup from "yup";

export const schemaCreateAd = yup.object().shape({
	// typeAd: yup.string().required(),
	title: yup.string().required(),
	description: yup.string().required(),
	year: yup
		.number()
		.required()
		.typeError("Campo obrigatório"),
	mileage: yup
		.number()
		.required()
		.typeError("Campo obrigatório"),
	price: yup.string().required(),
	// typeVehicle: yup.string().required(),
	urlCoverImage: yup.string().required(),
	urlImage1: yup.string().required(),
	urlImage6: yup.string(),
});
