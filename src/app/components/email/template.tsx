import React from "react";

export interface EmailTemplateProps {
    subject: string;
    name: string;
    email: string;
    message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ subject, name, email, message }) => {
    return (
        <div>
            <h1>{subject}</h1>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{message}</h1>
            <a className="px-12 py-5"
            href="https://www.google.com" target="_blank">
                Enviar
            </a>
        </div>
    );
}

export default EmailTemplate;