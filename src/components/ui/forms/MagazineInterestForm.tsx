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
			companyName: '',
			name: '',
			address: '',
			postalCode: '',
			city: '',
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
		<form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-2 w-full">
			<FormField
				label={messages.forms.labels.companyName}
				register={register('companyName')}
				error={errors.companyName}
				placeholder={messages.forms.placeholders.companyName}
				required
			/>

			<FormField
				label={messages.forms.labels.name}
				register={register('name')}
				error={errors.name}
				placeholder={messages.forms.placeholders.name}
				required
			/>

			<FormField
				label={messages.forms.labels.address}
				register={register('address')}
				error={errors.address}
				placeholder={messages.forms.placeholders.address}
				required
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<FormField
					label={messages.forms.labels.postalCode}
					register={register('postalCode')}
					error={errors.postalCode}
					placeholder={messages.forms.placeholders.postalCode}
					required
				/>

				<FormField
					label={messages.forms.labels.city}
					register={register('city')}
					error={errors.city}
					placeholder={messages.forms.placeholders.city}
					required
				/>
			</div>

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
				className="bg-brand-red hover:bg-red-700 disabled:opacity-50 text-white font-medium py-2 px-4 rounded-md transition w-full mt-2"
			>
				{isLoading ? messages.forms.buttons.magazineLoading : messages.forms.buttons.magazine}
			</button>
		</form>
	);
};

export default MagazineInterestForm;
