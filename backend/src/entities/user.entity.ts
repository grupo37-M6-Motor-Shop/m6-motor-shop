import { Exclude } from "class-transformer";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Address from "./address.entity";
import Ad from "./ad.entity";
import Comment from "./comment.entity";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 100 })
	name: string;

	@Column({ length: 100, unique: true })
	email: string;

	@Column({ length: 14, unique: true })
	cpf: string;

	@Column({ length: 11 })
	phone: string;

	@Column({ length: 8 })
	birthday: string;

	@Column({ length: 500 })
	description: string;

	@Column({ default: false })
	advertiser: boolean;

	@Column({ length: 120 })
	@Exclude()
	password: string;

	@Column({ length: 6, default: null })
	newPassrwordCode: string;

	@Column({ default: true })
	isActive: boolean;

	@Column({ default: false })
	isAdm: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => Address, { cascade: true })
	@JoinColumn()
	address: Address;

	@OneToMany(() => Ad, (ad) => ad.user)
	ads: Ad[];

	@OneToMany(() => Comment, (comment) => comment.owner, { cascade: true })
	comments: Comment[];
}

export default User;
