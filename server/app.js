import express from "express";
import {config }from "dotenv";
import PaymentRoute from "./routes/PaymentRoute.js";
import cors from "cors"


config({path: "./config/config.env"})

export const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: [ process.env.FRONTEND_URL],
    credentials: true
}));
app.use('/api', PaymentRoute)

app.get('/api/getkey', (req,res) => {
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY,
    })
})