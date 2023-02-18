import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Comment from "./comment.entity";
import Galery from "./galery.entity";
import User from "./user.entity";

@Entity("announcements")
class Announcement {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 6 })
	typeAnnouncement: string;

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
	urlImage: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User, { eager: true })
	user: User;

	@OneToMany(() => Comment, (comment) => comment.announcement, {
		eager: true,
		cascade: true,
	})
	comments: Comment[];

	@OneToMany(() => Galery, (galery) => galery.announcement, {
		eager: true,
		cascade: true,
	})
	galerys: Galery[];
}

export default Announcement;
