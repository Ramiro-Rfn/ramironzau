import { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../lib/nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, message } = req.body;

    if(req.method === 'POST') {
        try {
            transporter.sendMail({
                from: `"${name} 👻" <${email}>`,
                to: 'baz@example.com',
                subject: "Help me",
                text: String(message),
                html: "<b>Hello world?</b>",
            })
    
            res.status(200).json({message: 'Email enviado com sucesso!'});
        } catch (error) {
            console.log(error);
            res.status(404).json({message: 'Erro ao enviar a messagem!'})
        }
    }

    res.status(200).json('Ok');
}