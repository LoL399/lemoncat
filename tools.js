const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const privateKey = `!#@!IHU@!#&W*WQG13!ewEWereTE@13`;

//Todo: No Test
exports.token = (body, time) =>
  jwt.sign({ exp: Math.floor(Date.now() / 1000) + 60 * time, body }, privateKey, {
    algorithm: "RS256",
  });

//Todo: No Test
exports.mail = async (user, subject, body) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    // to: "bar@example.com, baz@example.com",
    to: user,
    subject,
    text: body,
    html: `<b>${subject}</b>`,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

