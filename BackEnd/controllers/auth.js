import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    const verifyuser = jwt.verify(token, process.env.TOKEN_SECRET);

    console.log(verifyuser);

    const rootuser = await users.findOne({ id: verifyuser.uuid, token });

    console.log(rootuser.email);

    if (!rootuser) {
      throw new Error("user not found");
    }

    req.token = token;

    req.rootuser = rootuser;

    // req.userid = rootuser.uuid

    next();
  } catch (error) {
    res.clearCookie("token");

    res.status(401).json({ msg: "unauthorized: no token provided" });

    console.log(error);
  }
};

export default auth;
