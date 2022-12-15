import express from "express";
import users from "../models/UserModel.js";
// import router from "./UserLogin.js";
const router = express.Router();

router.get("/usermanagement", async (req, res) => {
  try {
    const found = await users.findAll();
    if (found) return res.status(200).json(found);
  } catch (error) {
    res.status(404).json({ msg: "User does not exist" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // const uuid = req.params.id;

    console.log("hello");

    const response = await users.findOne({
      attributes: ["uuid", "email", "role"],

      where: {
        uuid: req.params.id,
      },
    });

    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ msg: "can find the user" });
  }
});



router.patch("/:id", async (req, res) => {
  const user = await users.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "user not found" });
  const { email, role } = req.body;
  try {
    await users.update(
      {
        email: email,
        role: role,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  const user = await users.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  try {
    await users.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

export default router;
