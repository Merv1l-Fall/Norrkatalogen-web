'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from './FormField';
import ConsentCheckbox from './ConsentCheckbox';
import { MagazineInterestFormData } from './types';
import { createMagazineInterestFormSchema } from './validationSchemas';
import type { ValidationMessages } from './validationSchemas';

interface MagazineInterestFormProps {
	messages: ValidationMessages;
	onSubmit?: (data: MagazineInterestFormData) => Promise<void> | void;
	isLoading?: boolean;
}

const MagazineInterestForm: FC<MagazineInterestFormProps> = ({ messages, onSubmit, isLoading = false }) => {
	const validationSchema = createMagazineInterestFormSchema(messages);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<MagazineInterestFormData>({
		resolver: zodResolver(validationSchema as any) as any,
		mode: 'onBlur',
		defaultValues: {
			name: '',
			email: '',
			consent: false,
		},
	});

	const handleFormSubmit = async (data: MagazineInterestFormData) => {
		if (onSubmit) {
			await onSubmit(data);
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 w-full max-w-md">
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

			<ConsentCheckbox
				label={messages.forms.labels.consentMagazine}
				register={register('consent')}
				error={errors.consent}
			/>

			<button
				type="submit"
				disabled={isLoading}
				className="bg-brand-red hover:bg-red-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded-md transition w-full"
			>
				{isLoading ? messages.forms.buttons.magazineLoading : messages.forms.buttons.magazine}
			</button>
		</form>
	);
};

export default MagazineInterestForm;
