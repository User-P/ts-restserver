import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
	const users = await User.findAll();
	res.json({ users });
};

export const getUser = async (req: Request, res: Response) => {
	const user = await User.findByPk(req.params.id);
	user ? res.json(user) : res.status(404).json({ message: "User not found" });
};

export const postUser = async (req: Request, res: Response) => {
	const { body } = req;

	try {
		const userExist = await User.findOne({ where: { email: body.email } });

		if (userExist)
			return res.status(400).json({ message: "User already exists" });

		await User.create(body);

		res.json({ message: "User created successfully" });
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const putUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const user = await User.findByPk(id);

		if (!user) return res.status(404).json({ message: "User not found" });

		await user.update(body);

		res.json({ message: "User updated successfully" });
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	await User.destroy({ where: { id } });
	res.json({ message: "User deleted successfully" });
};
