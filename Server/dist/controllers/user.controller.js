"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.getUserById = exports.loginUser = exports.getAllUsers = exports.createUser = void 0;
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.User.find({})
        .then((u) => res.status(200).send({ data: u }))
        .catch((err) => res.send({ msg: err.message }));
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // Validate request
    if (!name || !email || !password) {
        return res.status(400).send({ msg: 'Name, email, and password are required' });
    }
    try {
        const existingUser = yield user_model_1.User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).send({ msg: 'User with the same email already exists' });
        }
        const newUser = new user_model_1.User({
            name: name,
            email: email,
            password: password,
        });
        const user = yield newUser.save();
        try {
            let _user = {
                email: user.email,
                name: user.name,
                token: jsonwebtoken_1.default.sign({
                    email: user.email,
                    id: user._id,
                }, "EVDiagnose", { expiresIn: "24h" })
            };
            res.status(201).send({ message: 'User created successfully', data: _user });
        }
        catch (err) {
        }
    }
    catch (err) {
        res.status(500).send({ message: 'Failed to create user', error: err.message });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.User.findOne({ email: email });
    if (!user) {
        return res.status(400).send({ msg: 'The user with the email not present' });
    }
    if (user.password != password) {
        return res.status(400).send({ msg: 'Incorrect password' });
    }
    else {
        try {
            let _user = {
                email: user.email,
                name: user.name,
                token: jsonwebtoken_1.default.sign({
                    email: user.email,
                    id: user._id,
                }, "EVDiagnose", { expiresIn: "24h" })
            };
            res.status(200).send({ msg: 'login successfully', data: _user });
        }
        catch (err) {
            res.status(500).send({ msg: 'Failed to login', error: err.message });
        }
    }
});
exports.loginUser = loginUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const user = yield user_model_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ data: user });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getUserById = getUserById;
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const updateData = req.body;
    try {
        const user = yield user_model_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        Object.assign(user, updateData);
        yield user.save();
        res.status(200).json({ message: 'User updated successfully', data: user });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.updateUserById = updateUserById;
