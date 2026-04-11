"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useRef, useEffect } from "react";
import NorrButton from "@/components/ui/buttons/NorrButton";

type Props = {
	open: boolean;
	setOpen: (open: boolean) => void;
	lang: "en" | "sv";
	labels: {
		home: string;
		contact: string;
		about: string;
		cta: string;
		close: string;
	};
	currentPath?: string;
};

const MobileMenu = ({ open, setOpen, labels, lang, currentPath = "/" }: Props) => {
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const pathname = usePathname();

	const normalizePath = (path: string) => {
		const [cleanPath] = path.split(/[?#]/);
		if (!cleanPath) return "/";
		const withoutTrailingSlash = cleanPath.replace(/\/+$/, "");
		return withoutTrailingSlash === "" ? "/" : withoutTrailingSlash;
	};

	// Strip locale from pathname: /en/about -> /about, /sv -> /
	const pathWithoutLocale = (() => {
		const parts = pathname.split("/").filter(Boolean); // ["en","about"]
		const rest = parts.slice(1).join("/");
		return rest ? `/${rest}` : "/";
	})();

	const isActive = (href: string) => normalizePath(pathWithoutLocale) === normalizePath(href);

	const mobileLinkClass = (href: string) =>
		`transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red px-2 py-1 border-b-2 ${
			isActive(href) ? "border-brand-red" : "border-transparent"
		}`;

	// Auto-focus close button when menu opens
	useEffect(() => {
		if (open && closeButtonRef.current) {
			closeButtonRef.current.focus();
		}
	}, [open]);

	return (
		<Transition show={open} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={() => setOpen(false)} id="mobile-menu">
				{/* Semi-transparent backdrop */}
				<TransitionChild
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/50" />
				</TransitionChild>

				{/* Menu panel */}
				<div className="fixed inset-0 overflow-y-auto">
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="ease-in duration-200"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<DialogPanel className="ml-auto w-full max-w-sm bg-brand-off-black text-brand-off-white h-full flex flex-col p-6">
							{/* Close Button */}
							<button
								ref={closeButtonRef}
								onClick={() => setOpen(false)}
								aria-label={labels.close}
								className="self-start text-xl transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2 py-1 mb-6"
							>
								✕ {labels.close}
							</button>

							{/* Mobile Links */}
							<nav className="flex flex-col gap-6 text-lg text-brand-off-white flex-1">
								<Link href={`/${lang}`} onClick={() => setOpen(false)} className={mobileLinkClass("/")}>
									{labels.home}
								</Link>
								<Link
									href={`/${lang}/about`}
									onClick={() => setOpen(false)}
									className={mobileLinkClass("/about")}
								>
									{labels.about}
								</Link>
								<Link
									href={`/${lang}/contact`}
									onClick={() => setOpen(false)}
									className={mobileLinkClass("/contact")}
								>
									{labels.contact}
								</Link>
							</nav>

							{/* Language Switcher + CTA Button */}
							<div className="flex flex-col gap-4">
								<Link
									href={`/${lang === "en" ? "sv" : "en"}${currentPath}`}
									onClick={() => setOpen(false)}
									className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red p-2 rounded text-brand-off-white flex items-center gap-2"
									aria-label={`Switch to ${lang === "en" ? "Swedish" : "English"}`}
									title={`Switch to ${lang === "en" ? "Swedish" : "English"}`}
								>
									{lang === "en" ? (
										<>
											<Image
												src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg"
												alt="Swedish flag"
												width={20}
												height={20}
											/>
											<span>Svenska</span>
										</>
									) : (
										<>
											<Image
												src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg"
												alt="UK flag"
												width={20}
												height={20}
											/>
											<span>English</span>
										</>
									)}
								</Link>

								<NorrButton variant="primary" size="md">
									{labels.cta}
								</NorrButton>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</Transition>
	);
};

export default MobileMenu;
