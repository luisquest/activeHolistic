export interface IEmailTemplateProps {
    subject: string;
    name: string;
    email: string;
    message: string;
    type: String; // CF: Contact Form   SF: Subscription Form
}