import axios from "axios";
import {API} from "./API";
import {jwtDecode} from "jwt-decode";
import {UserType} from "../types/user.type.ts";

interface LoginType {
    email: string;
    password: string;
}

const user_api = API + '/user/'
export const userLogin = (data: LoginType) => {
    return axios.post(`${user_api}login`, data, {})
}

export const registerUser = (data: LoginType) => {
    return axios.post(`${user_api}`, data, {})
}

export const getUserProfileData = () => {
    const user = jwtDecode(localStorage.getItem("token") || '') as UserType;
    return axios.get(`${user_api}${user.id}`, {})
}

export const updateUserData = (data: UserType) => {
    const user = jwtDecode(localStorage.getItem("token") || '') as UserType;
    return axios.put(`${user_api}${user.id}`, data, {})
};
export const deleteUserData = async () => {
    const user = jwtDecode(localStorage.getItem("token") || '') as UserType;
    try {
        const response = await axios.delete(`${API}/user/${user.id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            },
        });

        console.log("User deleted successfully");
        return response.data; // Return the response data if needed
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};