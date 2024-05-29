import all_product from "../assets/all_product";
import {ProductType} from "../types/product.type.ts";
import axios from "axios";
import {API} from "./API.ts";

const defaultCartItems: ProductType[] = []

export const getAllProducts = () => {
    return axios.get<{ data: ProductType[] }>(`${API}/vehicle/`);
}


export const addItemsToCart = (id: number) => {
    defaultCartItems.push(all_product.find((v) => v.id === id) as ProductType)
}

export const getNumberOfItemsInCart = () => {
    return defaultCartItems.length
}

export const getVehicleData = () => {
    return axios.get(`${API}/vehicle/getVehicleData/`)
}
