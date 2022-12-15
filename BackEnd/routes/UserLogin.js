import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verify from "hcaptcha";
import users from "../models/UserModel.js";
// import axios from "axios";
const router = express.Router();



// sign up start=================================================>

router.post("/signup", async (req, res) => {

  const { email, password, confirmpassword,role } = req.body;
  console.log(req.body);

  if (!email || !password )
    return res.status(400).json({ msg: "please fill all the field" });

  const finduser = await users.findOne({ where: { email: email } });

  if (finduser) {
    return res.status(400).json({ msg: "user is already exists" });
  }
  if (password !== confirmpassword)
    return res
      .status(400)
      .json({ msg: "password and confirm password not matched" });
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  try {
    const result = await users.create({
      email: email,
      password: hashpassword,
      // role: role,
    });
    const token = jwt.sign(
      { id: result.id, email: result.email },
      process.env.SECRET,
      {expiresIn: "1h" }
    );
    return res
      .status(201)
      .json({ email,  msg: "user created successfully", token: token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});
// sign up ends====================================================>



// login start====================================================>
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
 
 
  
  try {
    const finduser = await users.findOne({ where: { email: email } });
    if (finduser) {
      const password_valid = await bcrypt.compare(password, finduser.password);
      if (password_valid) {
        req.session.userId = finduser.uuid;
        const uuid = finduser.uuid;
        const email = finduser.email;
        const role = finduser.role;
        console.log(req.session);

        const token = jwt.sign(
          { id: finduser.id, email: finduser.email, first_Name: finduser.firstName },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({ uuid, email, role, token: token });
      } else {
        res.status(400).json({ message: "Password Incorrect" });
      }
    } else {
      res.status(404).json({ message: "User does not exist" });
    }
  } catch (error) {
    res.status(400).json({ message: "internal error" });
  }
});
// login ends====================================================>

// captcha start==================================================>

router.post("/signup-with-hcaptcha", async (req, res, next) => {
  if (!req.body.token) {
    return res.status(400).json({ error: "Token is missing" });
  }

  try {
    let { success } = await verify(
      process.env.hcaptchaSecret,

      req.body.token
    );

    if (success) {
      return res.json({ success: true });
    } else {
      return res.status(400).json({ error: "Invalid Captcha" });
    }
  } catch (e) {
    return res.status(400).json({ error: "Captcha Error. Try again." });
  }
});

//  captcha ends==================================================================>

export default router;
