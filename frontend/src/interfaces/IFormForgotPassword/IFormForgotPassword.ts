export interface ISendEmailForgotPassword {
  email: string;
}

export interface IValidateCodeForgotPassword {
  newPasswordCode: string;
}

export interface IRedefinePassword {
  password: string;
  confirmPassword: string;
}
