import multer from "multer";

import path from "path";

const multerFilter = (req, file, cb) => {
  var ext = path.extname(file.originalname);

  if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
    cb(new Error("Only images are allowed"));
  }

  cb(null, true);
};

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/user_images");
  },

  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const updateFile = multer({
  storage: Storage,

  limits: 3 * 1024 * 1024, //max 3MB file upload

  fileFilter: multerFilter,
});

export default updateFile;
