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
exports.getVehicleData = exports.getAllVehicles = void 0;
const all_product_1 = __importDefault(require("../models/all_product"));
const getAllVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).send({ data: all_product_1.default });
});
exports.getAllVehicles = getAllVehicles;
const getVehicleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        battery: '35',
        temperature: '140',
        avgSpeed: '45',
        maxSpeed: '90',
        time: '12:30',
        currentSpeed: '57',
        totalDistance: "50",
        avgFuel: '140',
        startl: "Hubli",
        endl: "dharwad",
    };
    return res.status(200).send({ data: data });
});
exports.getVehicleData = getVehicleData;
