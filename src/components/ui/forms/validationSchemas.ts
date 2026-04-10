import { z } from 'zod';
import type { ContactFormData, MagazineInterestFormData } from './types';

export type ValidationMessages = {
	forms: {
		labels: {
			companyName: string;
			name: string;
			address: string;
			postalCode: string;
			city: string;
			email: string;
			message: string;
			consentContact: string;
			consentMagazine: string;
		};
		placeholders: {
			companyName: string;
			name: string;
			address: string;
			postalCode: string;
			city: string;
			email: string;
			message: string;
		};
		buttons: {
			contact: string;
			contactLoading: string;
			magazine: string;
			magazineLoading: string;
		};
		validation: {
			companyName: {
				required: string;
				minLength: string;
			};
			name: {
				required: string;
				minLength: string;
			};
			address: {
				required: string;
				minLength: string;
			};
			postalCode: {
				required: string;
				pattern: string;
			};
			city: {
				required: string;
				minLength: string;
			};
			email: {
				required: string;
				invalid: string;
			};
			message: {
				required: string;
				minLength: string;
			};
			consent: {
				required: string;
			};
		};
	};
};

export const createContactFormSchema = (messages: ValidationMessages) => {
	const schema = z.object({
		name: z
			.string()
			.min(1, messages.forms.validation.name.required)
			.min(2, messages.forms.validation.name.minLength),
		email: z
			.email(messages.forms.validation.email.invalid)
			.min(1, messages.forms.validation.email.required),
		message: z
			.string()
			.min(1, messages.forms.validation.message.required)
			.min(10, messages.forms.validation.message.minLength),
		consent: z.boolean().refine((val) => val === true, {
			message: messages.forms.validation.consent.required,
		}),
	});
	return schema as z.ZodType<ContactFormData>;
};

export const createMagazineInterestFormSchema = (messages: ValidationMessages) => {
	const schema = z.object({
		companyName: z
			.string()
			.min(1, messages.forms.validation.companyName.required)
			.min(2, messages.forms.validation.companyName.minLength),
		name: z
			.string()
			.min(1, messages.forms.validation.name.required)
			.min(2, messages.forms.validation.name.minLength),
		address: z
			.string()
			.min(1, messages.forms.validation.address.required)
			.min(5, messages.forms.validation.address.minLength),
		postalCode: z
			.string()
			.min(1, messages.forms.validation.postalCode.required)
			.regex(/^\d{3}\s?\d{2}$/, messages.forms.validation.postalCode.pattern),
		city: z
			.string()
			.min(1, messages.forms.validation.city.required)
			.min(2, messages.forms.validation.city.minLength),
		email: z
			.email(messages.forms.validation.email.invalid)
			.min(1, messages.forms.validation.email.required),
		consent: z.boolean().refine((val) => val === true, {
			message: messages.forms.validation.consent.required,
		}),
	});
	return schema as z.ZodType<MagazineInterestFormData>;
};

export type ContactFormSchema = z.infer<ReturnType<typeof createContactFormSchema>>;
export type MagazineInterestFormSchema = z.infer<ReturnType<typeof createMagazineInterestFormSchema>>;
