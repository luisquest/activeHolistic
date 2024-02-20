
import { EmailContactTemplate, EmailSuscribeTemplate, IEmailTemplateProps } from '@/app/components/email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY ?? 're_cg5qikbQ_5iPpi3jREgTnvUwCuo5ngmcL');
const resendEmail = process.env.RESEND_EMAIL ?? 'gatito_190lobo_teve@hotmail.com';

export async function POST(request: Request) {
    const requestData: IEmailTemplateProps = await request.json();

    try {
        let template: any;
        if (requestData.type === 'CF') {
            template = EmailContactTemplate(requestData);
        } else if (requestData.type === 'SF') {
            template = EmailSuscribeTemplate(requestData);
        } else {
            throw new Error('Invalid email type');
        }

        await resend.emails.send({
            from: 'Not reply <onboarding@resend.dev>',
            to: [resendEmail],
            subject: requestData.subject,
            react: template,
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

        return NextResponse.json({ message: "Email Sent" }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ message: "Error Email Sent" }, {
            status: 400
        });
    }
}