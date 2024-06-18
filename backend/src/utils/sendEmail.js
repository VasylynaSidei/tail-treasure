import nodemailer from "nodemailer";

const sendEmail = async (userEmail, subject, htmlTemplate) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_APP,
        pass: process.env.APP_PASS,
      },
    });

    const mailopts = {
      from: process.env.EMAIL_APP,
      to: userEmail,
      subject: subject,
      html: htmlTemplate,
    };
    const info = await transporter.sendMail(mailopts);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.log(error);
    throw new Error("internal servecd error");
  }
};
export default sendEmail;
