import app from "express";
import {getAllVehicles, getVehicleData} from "../controllers/vehicle.controller";

const router = app.Router()

router.get('/', getAllVehicles)
router.get('/getVehicleData', getVehicleData)

module.exports = router
