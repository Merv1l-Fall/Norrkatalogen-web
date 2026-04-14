import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, companyName, address, postalCode, city, consent } = body;

		// Validate required fields
		if (!name || !email || !companyName || !address || !postalCode || !city || !consent) {
			return NextResponse.json(
				{ error: 'Missing required fields or consent not given' },
				{ status: 400 }
			);
		}

		// Send email using Resend
		const result = await resend.emails.send({
			from: 'noreply@norrkatalogen.se',
			to: 'kontakt@norrkatalogen.se',
			replyTo: email,
			subject: `New Magazine Interest Submission from ${companyName}`,
			html: `
				<h2>New Magazine Interest Submission</h2>
				<p><strong>Company Name:</strong> ${companyName}</p>
				<p><strong>Contact Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Address:</strong> ${address}</p>
				<p><strong>Postal Code:</strong> ${postalCode}</p>
				<p><strong>City:</strong> ${city}</p>
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
		console.error('Magazine interest form error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
