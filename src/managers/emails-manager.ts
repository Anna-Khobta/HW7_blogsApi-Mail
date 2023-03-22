import nodemailer from "nodemailer";
import {UserDbType} from "../repositories/types";

export const emailsManager = {
    async sendEmailConfirmationMessage (newUser: UserDbType) {

        const myPass = process.env.EMAIL

// create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "menthol.vegan@gmail.com", // generated ethereal user
                pass: myPass, // generated ethereal password
            },
        });
const your_confirmation_code = newUser.emailConfirmation.confirmationCode

// send mail with defined transport object
        let info = await transporter.sendMail({
            from: "AnnaTestEmail",  // sender address
            to: newUser.accountData.email, // list of receivers
            subject: "Confirmation Message1", // Subject line
            html: " <h1>Thank for your registration</h1> " +
                " <p>To finish registration please follow the link below: </p> " +
                " https://somesite.com/confirm-email?code=" + your_confirmation_code})
        // html body

        return info

    }
}