'use client';

import { useModalStore } from '@/lib/store/useModalStore';
import ModalWrapper from './ModalWrapper';

type Props = {
	dict: {
		privacyPolicy: {
			title: string;
			lastUpdated: string;
			sections: Array<{
				heading: string;
				content: string;
			}>;
		};
	};
};

const PrivacyPolicyModal = ({ dict }: Props) => {
	const { isOpen, closeModal } = useModalStore();

	if (!isOpen) return null;

	return (
		<ModalWrapper onClose={closeModal}>
			<div className="bg-brand-off-white rounded-lg shadow-xl max-w-2xl max-h-160 flex flex-col overflow-hidden">
				<div className="flex justify-between items-center mb-4 p-6 pb-0">
					<h2 className="text-2xl font-serif font-bold text-brand-off-black">
						{dict.privacyPolicy.title}
					</h2>
					<button
						onClick={closeModal}
						className="text-2xl text-gray-500 hover:text-gray-700 font-bold"
						aria-label="Close modal"
					>
						&times;
					</button>
				</div>

				<p className="text-sm text-gray-600 px-6 pt-0">{dict.privacyPolicy.lastUpdated}</p>

				<div className="overflow-y-auto flex-1 px-6 py-4">
					<div className="space-y-4">
						{dict.privacyPolicy.sections.map((section, index) => (
							<div key={index}>
								<h3 className="text-lg font-semibold text-brand-off-black mb-2">
									{section.heading}
								</h3>
								<p className="text-gray-700 leading-relaxed">{section.content}</p>
							</div>
						))}
					</div>
				</div>

				<div className="mt-6 flex gap-2 p-6 pt-4 border-t border-gray-200">
					<button
						onClick={closeModal}
						className="w-full bg-brand-red hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition"
					>
						Close
					</button>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default PrivacyPolicyModal;
