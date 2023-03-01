import { IUser } from "../IUser/IUser"

export interface ICooments {
    id: string,
    description: string,
    owner: IUser,
    createdAt: string,
    updatedAt: string
}