import express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import UserLogin from "./routes/UserLogin.js";
import Usermanagement from "./routes/Usermanagement.js"

dotenv.config();
const app = express();

(async()=>{
    await db.sync()
})();


app.use(cors({

    credentials: true,
    origin: ['http://localhost:3000'],
}))


app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto',
    }
}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(UserLogin);
app.use(Usermanagement);





app.listen(process.env.APP_PORT, ()=>{
    console.log('server is up and running...')
})
