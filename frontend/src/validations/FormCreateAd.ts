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
	urlImage1: yup.string(),
	urlImage2: yup.string(),
	urlImage3: yup.string(),
	urlImage4: yup.string(),
	urlImage5: yup.string(),
	urlImage6: yup.string(),
});
