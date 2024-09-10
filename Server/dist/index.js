"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:5173', methods: ["GET", "POST", "PUT", "DELETE"], }));
app.use(express_1.default.json());
app.on('error', (err) => {
    console.log('error', err);
});
// @ts-ignore
mongoose_1.default.connect(process.env.MONGO_DB_URL)
    .then(r => {
    console.log('Connected with MongoDB 👍');
})
    .catch((err) => console.log(err));
app.use('/api/v2/user/', require('./routes/user.route'));
app.use('/api/v2/vehicle/', require('./routes/vehicle.route'));
app.listen(process.env.PORT, () => {
    console.log(`⚡ EVDiagnose v2 REST API Server Started at ${process.env.PORT}`);
});
