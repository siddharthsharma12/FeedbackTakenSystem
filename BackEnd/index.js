import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserLogin from "./routes/UserLogin.js";

dotenv.config();
const app = express();

(async()=>{
    await db.sync()
})();


app.use(cors({

    credentials: true,
    origin: 'http://localhost:3000'
}))


// app.use(session({
//     secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: 'auto'
//     }
// }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserLogin);




app.listen(process.env.APP_PORT, ()=>{
    console.log('server is up and running...')
})
