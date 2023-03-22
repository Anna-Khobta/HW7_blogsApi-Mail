import nodemailer from "nodemailer";

export const emailAdapter = {
    async sendEmail (email: string, message: string, subject: string) {

// create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "menthol.vegan@gmail.com", // generated ethereal user
                pass: "lxaefvxolgncwqbd", // generated ethereal password
            },
        });

// send mail with defined transport object
        let info = await transporter.sendMail({
            from: "AnnaKh",  // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: message, // html body
        });

        return info

    }
}