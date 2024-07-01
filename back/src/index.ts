import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes';
import appointmentRouter from './routes/appointmentRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/appointments', appointmentRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
