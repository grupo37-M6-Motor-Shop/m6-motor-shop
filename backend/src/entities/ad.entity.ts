import {
	BeforeRemove,
	Column,
	CreateDateColumn,
	Entity,
	getRepository,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Comment from "./comment.entity";
import Gallery from "./gallery.entity";
import User from "./user.entity";

@Entity("ads")
class Ad {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 6 })
	typeAd: string;

	@Column({ length: 200 })
	title: string;

	@Column({ length: 500 })
	description: string;

	@Column()
	year: number;

	@Column()
	mileage: number;

	@Column({ type: "decimal", precision: 12, scale: 2 })
	price: number;

	@Column({ default: true })
	isActive: boolean;

	@Column({ length: 5 })
	typeVehicle: string;

	@Column({ length: 1000 })
	urlCoverImage: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User, { eager: true })
	user: User;

	@OneToMany(() => Comment, (comment) => comment.ad, {
		eager: true,
		cascade: true,
	})
	comments: Comment[];

	@OneToOne(() => Gallery, (gallery) => gallery.ad, { eager: true })
	gallery: Gallery;
}

export default Ad;
