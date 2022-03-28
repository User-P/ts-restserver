import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.send(users);
}

export const getUser = async (req: Request, res: Response) => {
    const user = await User.findByPk(req.params.id);
    res.send(user);
}

export const postUser = async (req: Request, res: Response) => {
    // const user = new User(req.body);
    // await user.save();
    // res.send(user);
}

export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    // const user = await User.findByIdAndUpdate(id, req.body, {
    //     new: true
    // });
    // res.send(user);

}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    // await User.findByIdAndRemove(id);
    res.send('User deleted');
}

    
