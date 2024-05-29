import all_product from "../models/all_product";
import {Request, Response} from "express";

export const getAllVehicles = async (req: Request, res: Response) => {
    return res.status(200).send({data: all_product})
}

export const getVehicleData = async (req: Request, res: Response) => {
    const data = {
        battery: '85',
        temperature: '180',
        avgSpeed: '78',
        maxSpeed: '90',
        time: '12:30',
        currentSpeed: '87',
        totalDistance: "20",
        avgFuel: '54',
        startl:"hubli",
        endl:"dharwad",
    }
    return res.status(200).send({data: data})
}
