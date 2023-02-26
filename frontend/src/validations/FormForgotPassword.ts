import * as yup from "yup";

export const schemaSendEmailForgotPassword= yup.object().shape({
	email: yup.string().required(),
});
