import nodemailer from "nodemailer";

let otp = "";

const generateOTP = () => {
  for (let i = 0; i <= 5; i++) {
    const randomval = Math.round(Math.random() * 9);

    otp = otp + randomval;
  }

  return otp;
};

generateOTP();

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // hostname

    service: "outlook", // service name

    secureConnection: false,

    tls: {
      ciphers: "SSLv3", // tls version
    },

    port: 587, // port

    auth: {
      user: "rishabhsinghkothiya@outlook.com",

      pass: "Asdfg@13245",
    },
  });

  const mailOptions = {
    from: "rishabhsinghkothiya@outlook.com",

    to: options.to,

    subject: options.subject,

    html: <h1>${otp}</h1>,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

export default sendEmail;
