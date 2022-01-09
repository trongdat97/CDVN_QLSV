import express from "express";
import cors from "cors";
import dbconnection from "./src/config/dbconnection";
import userRouter from './src/routes/user.route';
import classRouter from './src/routes/class.route';
import studentRouter from './src/routes/student.route';

const app = express();

dbconnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/user",userRouter);
app.use('/class',classRouter);
app.use("/student",studentRouter);


const port = 3000;

app.listen(port, () => console.log(`Server is running in port ${port}`));
