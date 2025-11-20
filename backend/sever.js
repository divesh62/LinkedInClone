import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import UserRouter from "./routes/users.routes.js"
import PostRouter from "./routes/posts.routes.js"

import path from "path"
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);
app.use(PostRouter);
app.use(express.static("uploads"));

const start = async()=>{
    let connectDB = await mongoose.connect("mongodb+srv://ddivesh62_db_user:Div1999@cluster0.0igib2m.mongodb.net/");

    app.listen(9000,()=>{
        console.log("Server is runing on the port 9000");
    })
}

start()