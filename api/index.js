import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();

const PORT = process.env.PORT || 9001

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to Database!')
    })
    .catch((err) => {
        console.log('Database ERROR', err.message)
    })

const app = express();

app.use(express.json())

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next ) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error!'

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
