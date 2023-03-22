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

// send mail with defined transport object
        let info = await transporter.sendMail({
            from: "AnnaTestEmail",  // sender address
            to: newUser.accountData.email, // list of receivers
            subject: "Confirmation Message1", // Subject line
            html: newUser.emailConfirmation.confirmationCode, // html body
        });

        return info

    }
}