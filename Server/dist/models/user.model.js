"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    address: String,
    dateOfBirth: Date,
    gender: String,
    vehicleRegNo: String,
    insuranceId: String,
    drivingLicense: String
});
const User = (0, mongoose_1.model)('users', userSchema);
exports.User = User;
