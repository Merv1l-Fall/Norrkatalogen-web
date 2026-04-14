import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, message, consent } = body;

		// Validate required fields
		if (!name || !email || !message || !consent) {
			return NextResponse.json(
				{ error: 'Missing required fields or consent not given' },
				{ status: 400 }
			);
		}

		// Send email using Resend
		const result = await resend.emails.send({
			from: 'noreply@norrkatalogen.se',
			to: 'kontakt@norrkatalogen.se',
			// to: 'vilmer.fall@gmail.com', // For testing purposes, replace with actual recipient in production
			replyTo: email,
			subject: `New Contact Form Submission from ${name}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
				<hr>
				<p><small>Submitted from: Norrkatalogen Website</small></p>
			`,
		});

		if (result.error) {
			console.error('Resend error:', result.error);
			return NextResponse.json(
				{ error: 'Failed to send email' },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ success: true, id: result.data?.id },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
