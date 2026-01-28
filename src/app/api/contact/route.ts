import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstname, lastname, email, message } = body;

        const data = await resend.emails.send({
            from: 'Contact Site Francois <onboarding@resend.dev>',
            to: ['allan.chemla@gmail.com'],
            subject: `Nouveau message de ${firstname} ${lastname}`,
            text: `
        Nouveau message reçu depuis le site :
        
        Prénom: ${firstname}
        Nom: ${lastname}
        Email: ${email}
        
        Message:
        ${message}
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
