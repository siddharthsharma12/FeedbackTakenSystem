import express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
import UserLogin from "./routes/UserLogin.js";
import Usermanagement from "./routes/Usermanagement.js";
// import Components from "./routes/Components.js"
import questions from "./routes/questions.js";

dotenv.config();
const app = express();




app.use(cors({

    credentials: true,
    origin: ['http://localhost:3000'],
}))

app.use(express.json())
app.use(session({
    secret: 'iamsecretkeyoffeedbacktaken',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto',
    }
}))

// app.use('/', (req, res)=>{
//     res.json('welcome to feedback is running')
// })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(UserLogin);
app.use(Usermanagement);
app.use(questions)
// app.use(Components);





app.listen(process.env.APP_PORT, ()=>{
    console.log('server is up and running...')
})
