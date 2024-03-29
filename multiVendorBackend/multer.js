const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =  Date.now() + "-" + Math.round.apply(Math.random() * 1e9)
    const fileName = file.originalname.split(".")[0]
    cb(null, fileName + uniqueSuffix + "." + ".png, .jpeg, .jpg");
  },
});


const upload = multer({ storage: storage });