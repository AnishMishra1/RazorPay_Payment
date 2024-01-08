import {app} from "./app.js";
import Razorpay from "razorpay";


app.listen(process.env.PORT , () => {
    console.log(`Server is running ${process.env.PORT}`)
})

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });