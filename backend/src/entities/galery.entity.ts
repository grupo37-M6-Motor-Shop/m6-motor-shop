import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Announcement from "./announcement.entity";

@Entity("galery")
class Galery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 1000 })
  urlImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  @ManyToOne(() => Announcement, { onDelete: "CASCADE" })
  announcement: Announcement;
}

export default Galery;
