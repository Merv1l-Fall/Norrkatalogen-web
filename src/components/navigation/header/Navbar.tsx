"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NorrButton from "@/components/ui/buttons/NorrButton";
import { useModalStore } from "@/lib/store/useModalStore";

type Props = {
	lang: "en" | "sv";
	labels: {
		home: string;
		contact: string;
		about: string;
		cta: string;
		close: string;
		languageSwitch: string;
	};
	currentPath?: string;
};

const Navbar = ({ lang, labels, currentPath = "/" }: Props) => {
	const [open, setOpen] = useState(false);
	const modalStore = useModalStore();

	const normalizePath = (path: string) => {
		const [cleanPath] = path.split(/[?#]/);
		if (!cleanPath) return "/";
		const withoutTrailingSlash = cleanPath.replace(/\/+$/, "");
		return withoutTrailingSlash === "" ? "/" : withoutTrailingSlash;
	};

	// Compare against locale-stripped paths coming from Header
	const isActive = (href: string) => normalizePath(currentPath) === normalizePath(href);
	const navLinkClass = (href: string) =>
		`transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red px-2 py-1 border-b-2 ${
			isActive(href) ? "border-brand-red" : "border-transparent"
		}`;

	return (
		<nav className="flex h-24 items-center justify-between" aria-label="Main navigation">
			{/* Left: Logo */}
			<div className="flex items-center justify-center">
				<Link href={`/${lang}`} aria-label={`Norrkatalogen - ${labels.home}`}>
					<Image src="/NorrkatalogenWhite.svg" alt="" width={180} height={50} />
				</Link>
			</div>

			{/* Center: Navigation Links (Desktop only) */}
			<div className="hidden items-center gap-8 text-brand-off-white md:flex">
				<Link href={`/${lang}`} className={navLinkClass("/")} aria-current={isActive("/") ? "page" : undefined}>
					{labels.home}
				</Link>
				<Link
					href={`/${lang}/about`}
					className={navLinkClass("/about")}
					aria-current={isActive("/about") ? "page" : undefined}
				>
					{labels.about}
				</Link>
				<Link
					href={`/${lang}/contact`}
					className={navLinkClass("/contact")}
					aria-current={isActive("/contact") ? "page" : undefined}
				>
					{labels.contact}
				</Link>
			</div>

			{/* Right: CTA Button + Language Switcher (Desktop only) */}
			<div className="hidden items-center gap-4 md:flex">
				<NorrButton
					variant="primary"
					size="md"
					onClick={modalStore.openModal}
				>
					{labels.cta}
				</NorrButton>

				<Link
					href={`/${lang === "en" ? "sv" : "en"}${currentPath}`}
					className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red p-2 rounded text-brand-off-white"
					aria-label={`Switch to ${lang === "en" ? "Swedish" : "English"}`}
					title={`Switch to ${lang === "en" ? "Swedish" : "English"}`}
				>
					{lang === "en" ? (
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg"
							alt="Swedish flag"
							width={24}
							height={24}
						/>
					) : (
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg"
							alt="UK flag"
							width={24}
							height={24}
						/>
					)}
				</Link>
			</div>

			{/* Mobile: Menu Button */}
			<button
				id="nav-menu-toggle"
				onClick={() => setOpen((value) => !value)}
				aria-label="Toggle navigation menu"
				aria-expanded={open}
				aria-controls="mobile-menu"
				className="md:hidden text-brand-off-white transition focus:outline-none focus:ring-2 focus:ring-brand-red rounded p-2"
			>
				<svg
					className="h-12 w-12"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={3}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>

			<MobileMenu open={open} setOpen={setOpen} labels={labels} lang={lang} currentPath={currentPath} />
		</nav>
	);
};

export default Navbar;
