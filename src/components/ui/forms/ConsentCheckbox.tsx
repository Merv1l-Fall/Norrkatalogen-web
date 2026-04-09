import { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface ConsentCheckboxProps {
	label: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
}

const ConsentCheckbox: FC<ConsentCheckboxProps> = ({ label, register, error }) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="flex items-center gap-2 cursor-pointer">
				<input
					{...register}
					type="checkbox"
					className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
				/>
				<span className="text-sm text-gray-700">{label}</span>
			</label>
			<span className="text-red-500 text-sm h-5">
				{error?.message}
			</span>
		</div>
	);
};

export default ConsentCheckbox;
