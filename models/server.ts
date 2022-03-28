import express, { Application } from "express";
import userRoutes from "../routes/user";
import cors from "cors";
impor

class Server {
	private app: Application;
	private port: string;
	private api = {
		users: "/api/users",
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "3000";
		this.routes();
		this.middlewares();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.api.users, userRoutes);
	}

	start() {
		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}
}

export default Server;