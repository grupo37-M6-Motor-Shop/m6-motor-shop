import { DataSource } from "typeorm";
import "dotenv/config";
import User from "./entities/user.entity";
import Address from "./entities/address.entity";
import Announcement from "./entities/announcement.entity";
import Galery from "./entities/galery.entity";
import Comment from "./entities/comment.entity";
import { createTables1676492395895 } from "./migrations/1676492395895-createTables";
import { createTables1676555907093 } from "./migrations/1676555907093-createTables";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [User, Address, Announcement, Comment, Galery],
  migrations: [createTables1676492395895, createTables1676555907093]
});

export default AppDataSource;
