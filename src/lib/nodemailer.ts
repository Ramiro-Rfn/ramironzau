import nodemailer from 'nodemailer';

interface Transporter {
  host: string,
  port: string,
  secure: boolean,
  auth: {
    user: string;
    pass: string;
  }
}

export const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
});
