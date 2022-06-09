//* Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRouter = require("./routes/contact");

//* INitialaize Server
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//* Cors Initialaize
const whitelist = ["https://ahmed-seven.vercel.app/"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

//* Requests
app.use("/", contactRouter);

//* App Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`lestening to port ${PORT}....`));
