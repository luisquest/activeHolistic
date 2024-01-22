import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate, { EmailTemplateProps } from '@/app/components/email/template';

const resend = new Resend(process.env.RESEND_API_KEY ?? 're_cg5qikbQ_5iPpi3jREgTnvUwCuo5ngmcL');
const resendEmail = process.env.RESEND_EMAIL ?? 'gatito_190lobo_teve@hotmail.com';

export async function POST(request: Request) {
    const requestData: EmailTemplateProps = await request.json();
    console.log("request Body", request.body);
    console.log("requestData", requestData);
    try {
        const data = await resend.emails.send({
            from: 'Not reply <onboarding@resend.dev>',
            to: [resendEmail],
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