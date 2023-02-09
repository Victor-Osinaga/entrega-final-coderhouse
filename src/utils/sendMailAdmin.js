import { createTransport } from "nodemailer";
import config from "../../config.js";

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: config.google,
});

const sendMailAdmin = async (user, order) =>{
    const mailOptions = {
        from: 'Compra en tienda',
        to: user.email,
        subject: `Orden de compra creada: ${order.id} con datos: ${user.name} ${user.lastname} ${user.email}.`,
        text: JSON.stringify(order.products, null, 2),
    };
    const info = await transporter.sendMail(mailOptions)
    return info
}

export {
    sendMailAdmin
}