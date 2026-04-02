import { z } from 'zod';
import type { ContactFormData, MagazineInterestFormData } from './types';

export type ValidationMessages = {
	forms: {
		labels: {
			name: string;
			email: string;
			message: string;
			consentContact: string;
			consentMagazine: string;
		};
		placeholders: {
			name: string;
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
			name: {
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
		name: z
			.string()
			.min(1, messages.forms.validation.name.required)
			.min(2, messages.forms.validation.name.minLength),
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
