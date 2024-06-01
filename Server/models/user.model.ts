import {model, Schema} from "mongoose";

interface IUser extends Document {
    id?: number;
    name: string;
    email: string;
    password: string;
    address?: string,
    dateOfBirth: string,
    gender: string,
    vehicleRegNo: string,
    insuranceId: string,
    drivingLicense: String
}

const userSchema: Schema = new Schema<IUser>({
    name: String,
    email: {type: String, unique: true},
    password: String,
    address: String,
    dateOfBirth: Date,
    gender: String,
    vehicleRegNo: String,
    insuranceId: String,
    drivingLicense: String
})

const User = model<IUser>('users', userSchema)

export {User, IUser}
