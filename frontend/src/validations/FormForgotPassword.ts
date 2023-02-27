import * as yup from "yup";

export const schemaSendEmailForgotPassword= yup.object().shape({
	email: yup.string().required(),
});

export const schemaValidateCodeForgotPassword= yup.object().shape({
	newPasswordCode: yup.string().required(),
});
