import all_product from "../models/all_product";
import {Request, Response} from "express";

export const getAllVehicles = async (req: Request, res: Response) => {
    return res.status(200).send({data: all_product})
}

export const getVehicleData = async (req: Request, res: Response) => {
    const data = {
        battery: '55',
        temperature: '140',
        avgSpeed: '65',
        maxSpeed: '90',
        time: '12:30',
        currentSpeed: '57',
        totalDistance: "50",
        avgFuel: '140',
        startl:"Hubli",
        endl:"dharwad",
    }
    return res.status(200).send({data: data})
}
