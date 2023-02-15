import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Announcement from "./announcement.entity";
import User from "./user.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500 })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Announcement, { onDelete: "CASCADE" })
  announcement: Announcement;

  @ManyToOne(() => User,{ onDelete: "CASCADE" })
  owner: User;
}

export default Comment;
