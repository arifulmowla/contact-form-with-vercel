// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "kristoffer.greenfelder82@ethereal.email",
    pass: "8enN1RbvYask4QYmm9",
  },
});

export default async function handler(req, res) {
  const data = req.body.data;

  try {
    await transporter.sendMail({
      to: "mail@example.com",
      from: data.email,
      subject: `You got a new message from ${data.name}`,
      text: `Thanks for the mail.`,
    });

    res
      .status(200)
      .json({ status: "success", message: "Successfully send your message!" });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "You submit an incorrect mail address!",
    });
  }
}
