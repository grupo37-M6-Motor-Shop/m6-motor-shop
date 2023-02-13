import { DataSource } from "typeorm";
import "dotenv/config";

const isProduction = process.env.NODE_ENV === "production";
const AppDataSource = new DataSource(
	process.env.NODE_ENV === "test"
		? {
				type: "sqlite",
				database: ":memory:",
				synchronize: true,
				entities: ["src/entities/*.ts"],
		  }
		: {
				type: "postgres",
				url: process.env.DATABASE_URL,
				ssl: isProduction
					? {
							rejectUnauthorized: false,
					  }
					: false,
				synchronize: false,
				logging: isProduction ? false : true,
				entities:
					process.env.NODE_ENV === "production"
						? ["dist/src/entities/*.js"]
						: ["src/entities/*.ts"],
				migrations:
					process.env.NODE_ENV === "production"
						? ["dist/src/migrations/*.js"]
						: ["src/migrations/*.ts"],
		  }
	
);

export default AppDataSource;
