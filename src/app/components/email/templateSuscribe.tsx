import React from "react";
import { IEmailTemplateProps } from "./iEmailTemplateProps";

const EmailSuscribeTemplate: React.FC<Readonly<IEmailTemplateProps>> = ({ subject, email }) => {
    return (
        <div>
            <h1>Suscripción</h1>
            <h1>{subject}</h1>
            <h1>{email}</h1>
        </div>
    );
}

export default EmailSuscribeTemplate;