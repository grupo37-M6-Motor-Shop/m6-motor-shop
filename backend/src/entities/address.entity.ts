import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("address")
class Address {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 10 })
	cep: string;

	@Column({ length: 50 })
	state: string;

	@Column({ length: 50 })
	city: string;

	@Column({ length: 200 })
	street: string;

	@Column()
	number: number;

	@Column({ length: 500 })
	complement: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

export default Address;
