"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vehicle_controller_1 = require("../controllers/vehicle.controller");
const router = express_1.default.Router();
router.get('/', vehicle_controller_1.getAllVehicles);
router.get('/getVehicleData', vehicle_controller_1.getVehicleData);
module.exports = router;
