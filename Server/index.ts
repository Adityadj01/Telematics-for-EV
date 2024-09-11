import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors({origin: 'https://evdiagnose.vercel.app/', methods: ["GET", "POST", "PUT", "DELETE"],}))

app.use(express.json());

app.on('error', (err) => {
    console.log('error', err);
})

// @ts-ignore
mongoose.connect(process.env.MONGO_DB_URL)
    .then(r => {
        console.log('Connected with MongoDB 👍')
    })
    .catch((err) => console.log(err))

app.use('/api/v2/user/', require('./routes/user.route'))
app.use('/api/v2/vehicle/', require('./routes/vehicle.route'))

app.listen(process.env.PORT, () => {
    console.log(`⚡ EVDiagnose v2 REST API Server Started at ${process.env.PORT}`)
})
