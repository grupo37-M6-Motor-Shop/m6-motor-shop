import * as yup from "yup";

export const schemaLogin = yup.object().shape({
	email: yup.string().required(),
	password: yup.string().required(),
});
