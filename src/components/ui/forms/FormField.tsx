import { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface FormFieldProps {
	label: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
	type?: string;
	placeholder?: string;
	required?: boolean;
	as?: 'input' | 'textarea';
	rows?: number;
}

const FormField: FC<FormFieldProps> = ({
	label,
	register,
	error,
	type = 'text',
	placeholder,
	required,
	as = 'input',
	rows = 4,
}) => {
	const baseInputStyles =
		'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue';
	const errorStyles = error ? 'border-red-500 focus:ring-red-500' : '';

	return (
		<div className="flex flex-col gap-2">
			<label className="font-medium text-gray-700">
				{label}
				{required && <span className="text-red-500 ml-1">*</span>}
			</label>
			{as === 'textarea' ? (
				<textarea
					{...register}
					placeholder={placeholder}
					rows={rows}
					className={`${baseInputStyles} ${errorStyles} resize-none`}
				/>
			) : (
				<input
					{...register}
					type={type}
					placeholder={placeholder}
					className={`${baseInputStyles} ${errorStyles}`}
				/>
			)}
			{error && <span className="text-red-500 text-sm">{error.message}</span>}
		</div>
	);
};

export default FormField;
