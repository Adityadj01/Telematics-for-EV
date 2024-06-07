import {Request, Response} from "express";

import {User} from '../models/user.model'
import jwt from 'jsonwebtoken';

const getAllUsers = async (req: Request, res: Response) => {
    await User.find({})
        .then((u) =>
            res.status(200).send({data: u}))
        .catch((err) => res.send({msg: err.msg}))
}

const createUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;


    // Validate request
    if (!name || !email || !password) {
        return res.status(400).send({msg: 'Name, email, and password are required'});
    }

    try {
        const existingUser = await User.findOne({email: email});
        if (existingUser) {
            return res.status(409).send({msg: 'User with the same email already exists'});
        }

        const newUser = new User({
            name: name,
            email: email,
            password: password,
        });
        const user = await newUser.save();
        try {
            let _user = {
                email: user.email,
                name: user.name,
                token: jwt.sign({
                    email: user.email,
                    id: user._id,
                }, "EVDiagnose", {expiresIn: "24h"})
            }
            res.status(201).send({msg: 'User created successfully', data: _user});
        } catch (err) {

        }
    } catch (err: any) {
        res.status(500).send({msg: 'Failed to create user', error: err.msg});
    }
};

const loginUser = async (req: Request, res: Response) => {
    const {email, password} = req.body

    const user = await User.findOne({email: email})

    if (!user) {
        return res.status(400).send({msg: 'The user with the email not present'})
    }

    if (user.password != password) {
        return res.status(400).send({msg: 'Incorrect password'})
    } else {
        try {
            let _user = {
                email: user.email,
                name: user.name,
                token: jwt.sign({
                    email: user.email,
                    id: user._id,
                }, "EVDiagnose", {expiresIn: "24h"})
            }
            res.status(200).send({msg: 'login successfully', data: _user})
        } catch (err: any) {
            res.status(500).send({msg: 'Failed to login', error: err.msg});
        }
    }
}

const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({msg: 'User not found'});
        }

        res.status(200).json({data: user});
    } catch (err: any) {
        res.status(500).json({msg: err.msg});
    }
};

const updateUserById = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    const updateData = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({msg: 'User not found'});
        }

        Object.assign(user, updateData);

        await user.save();

        res.status(200).json({msg: 'User updated successfully', data: user});
    } catch (err: any) {
        res.status(500).json({msg: err.msg});
    }
};

export {createUser, getAllUsers, loginUser, getUserById, updateUserById}
