import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import verify from "hcaptcha";
// import axios from "axios";
import users from "../models/UserModel.js";
const router = express.Router();

// sign up start=================================================>
router.post('/SignupUser', async (req, res) => {

  const { email, password, confirmpassword, role } = req.body;
  console.log(req.body)

  if (!email || !password)
    return res.status(400).json({ msg: "please fill all the field" })
  const finduser = await users.findOne({ where: { email: email } });

  if (finduser) {
    return res.status(400).json({ msg: 'user is already exists' })
  }
  if (password !== confirmpassword) return res.status(400).json({ msg: 'password and confirm password not matched' })
  const salt = await bcrypt.genSalt(10)
  const hashpassword = await bcrypt.hash(password, salt);

  try {
    await users.create({
      email: email,
      password: hashpassword,
      role: role
    })
    const token = jwt.sign({ "id": users.id, "email": users.email }, process.env.SECRET, { expiresIn: '15m' });
    return res.status(201).json({ msg: 'user created successfully', token: token })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
})




// sign up ends====================================================>

// captcha

// router.post("/signup-with-hcaptcha", async (req, res, next) => {

//   if (!req.body.token) {

//     return res.status(400).json({ error: "Token is missing" });

//   }



//   try {

//     let { success } = await verify(

//       process.env.hcaptchaSecret,

//       req.body.token

//     );

//     if (success) {

//       return res.json({ success: true });

//     } else {

//       return res.status(400).json({ error: "Invalid Captcha" });

//     }

//   } catch (e) {

//     return res.status(400).json({ error: "Captcha Error. Try again." });

//   }

// });

//  captcha
// login start====================================================>
router.post('/login', async (req, res) => {
  const user = await users.findOne({ where: { email: req.body.email } });
  if (user) {
    const password_valid = await bcrypt.compare(req.body.password, user.password);
    if (password_valid) {
      const session = req.session;
      session.user = req.body.email;
      console.log(req.session)
      const token = jwt.sign({ "id": user.id, "email": user.email, "first_Name": user.firstName }, process.env.SECRET, { expiresIn: '15m' });
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ msg: "Password Incorrect" });
    }

  } else {
    res.status(404).json({ msg: "User does not exist" });
  }

});
// login ends====================================================>


// router.post('/update/:id', async (req, res) => {
//   const User = await users.findByPk({
//     where: {
//       uuid: req.params.id
//     }
//   })
//   if (!User)
//     return res.status(404).json({ msg: 'user not found' });
//   const { firstName, lastName, } = req.body
// })



export default router