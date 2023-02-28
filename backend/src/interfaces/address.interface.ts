import Address from "../entities/address.entity";
import User from "../entities/user.entity";

export interface IAddressRequest {
  	cep: string;
	state: string,
	city: string,
	street: string,
	number: string,
	complement: string
}

export interface IAddress {
  id: string,
  cep: string;
  state: string,
  city: string,
  street: string,
  number: string,
  complement: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface IAdressUpdate {
  	cep: string;
	state: string,
	city: string,
	street: string,
	number: string,
	complement: string
}
