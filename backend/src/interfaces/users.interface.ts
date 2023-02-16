import Address from "../entities/address.entity";

export interface IUserRequest {
  name: string,
  email: string,
  cpf: string,
  phone: string,
  birthday: string,
  description: string,
  advertiser: boolean,
  password: string,
  isAdm: boolean,
}

export interface IUser extends IUserRequest {
  id: string,
  createdAt: Date,
  updatedAt: Date,
}
