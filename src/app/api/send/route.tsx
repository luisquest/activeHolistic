import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate, { EmailTemplateProps } from '@/app/components/email/template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const requestData: EmailTemplateProps = await request.json();
    console.log("request Body", request.body);
    console.log("requestData", requestData);
    try {
        const data = await resend.emails.send({
            from: 'Not reply <onboarding@resend.dev>',
            to: ['gatito_190lobo_teve@hotmail.com'],
            subject: requestData.subject,
            react: EmailTemplate(requestData),
            text: 'it works!',
            headers: {
                'X-Entity-Ref-ID': '123456789',
            },
            tags: [
                {
                    name: 'category',
                    value: 'confirm_email',
                },
            ],
        });
        console.log("data", data);
        return NextResponse.json({ message: "Email Sent" }, {
            status: 200
        });
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "Error Email Sent" }, {
            status: 400
        });
    }
}