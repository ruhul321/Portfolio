const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running at PORT ${PORT}`));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);
// console.log(process.env.NODE_ENV);

let contactEmail;

if (process.env.NODE_ENV === "production") {
  //Gmail
  contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.GMAIL_PASS,
    },
  });
} else {
  contactEmail = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e1bb86f1d783b9",
      pass: "736589f907e3b5",
    },
  });
}

contactEmail.verify((error) => {
  if (error) {
    console.log("ERROR🔥", error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/", (req, res) => {
  res.status(200).json(`Welcome to Portfolio`);
});
router.get("/health", (req, res) => {
  res.status(200).json(`App is running fine at PORT ${PORT}`);
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "ra695958@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
