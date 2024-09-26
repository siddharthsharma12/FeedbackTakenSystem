import express from "express";
import fb_questions from "../models/questions.js";

const router = express.Router();

router.post("/addquestion", async (req, res) => {
   console.log(req.body)
  try {
    for (let i = 0; i < req.body.length; i++) {
      const questiontitle = req.body[i].question.title;
      console.log(questiontitle)
      await fb_questions.create({
        question: questiontitle,

      });
    }
    res.status(200).json({ msg: "created success" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
