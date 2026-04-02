'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from './FormField';
import ConsentCheckbox from './ConsentCheckbox';
import { ContactFormData } from './types';
import { createContactFormSchema } from './validationSchemas';
import type { ValidationMessages } from './validationSchemas';

interface ContactFormProps {
	messages: ValidationMessages;
	onSubmit?: (data: ContactFormData) => Promise<void> | void;
	isLoading?: boolean;
}

const ContactForm: FC<ContactFormProps> = ({ messages, onSubmit, isLoading = false }) => {
	const validationSchema = createContactFormSchema(messages);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(validationSchema as any) as any,
		mode: 'onBlur',
		defaultValues: {
			name: '',
			email: '',
			message: '',
			consent: false,
		},
	});

	const handleFormSubmit = async (data: ContactFormData) => {
		if (onSubmit) {
			await onSubmit(data);
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-6 w-full max-w-md">
			<FormField
				label={messages.forms.labels.name}
				register={register('name')}
				error={errors.name}
				placeholder={messages.forms.placeholders.name}
				required
			/>

			<FormField
				label={messages.forms.labels.email}
				register={register('email')}
				error={errors.email}
				placeholder={messages.forms.placeholders.email}
				type="email"
				required
			/>

			<FormField
				label={messages.forms.labels.message}
				register={register('message')}
				error={errors.message}
				placeholder={messages.forms.placeholders.message}
				as="textarea"
				rows={5}
				required
			/>

			<ConsentCheckbox
				label={messages.forms.labels.consentContact}
				register={register('consent')}
				error={errors.consent}
			/>

			<button
				type="submit"
				disabled={isLoading}
				className="bg-brand-blue hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded-md transition"
			>
				{isLoading ? messages.forms.buttons.contactLoading : messages.forms.buttons.contact}
			</button>
		</form>
	);
};

export default ContactForm;
