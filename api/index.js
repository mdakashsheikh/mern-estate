import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to Database!')
    })
    .catch((err) => {
        console.log('Database ERROR', err.message)
    })

const app = express();

app.listen(3000, () => {
    console.log(`Listening on PORT 3000`)
})