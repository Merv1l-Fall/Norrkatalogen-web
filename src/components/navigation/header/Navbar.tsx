"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

type Props = {
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

const Navbar = ({ lang, labels, currentPath = "/" }: Props) => {
	const [open, setOpen] = useState(false);

	const isActive = (href: string) => currentPath === href;

	return (
		<nav className="flex h-24 items-center justify-between" aria-label="Main navigation">
			{/* Logo */}
			<div className="flex items-center justify-center">
				<Link href={`/${lang}`} aria-label={`Norrkatalogen - ${labels.home}`}>
					<Image src="/NorrkatalogenWhite.svg" alt="" width={150} height={40} />
				</Link>
			</div>

			{/* Desktop navlinks */}
			<div className="hidden items-center gap-8 text-brand-off-white md:flex">
				<Link
					href={`/${lang}`}
					className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2 py-1"
					aria-current={isActive(`/${lang}`) ? "page" : undefined}
				>
					{labels.home}
				</Link>
				<Link
					href={`/${lang}/about`}
					className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2 py-1"
					aria-current={isActive(`/${lang}/about`) ? "page" : undefined}
				>
					{labels.about}
				</Link>
				<Link
					href={`/${lang}/contact`}
					className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2 py-1"
					aria-current={isActive(`/${lang}/contact`) ? "page" : undefined}
				>
					{labels.contact}
				</Link>
			</div>

			{/* CTA button */}
			<button
				aria-label={labels.cta}
				className="rounded-lg bg-brand-red px-4 py-2 transition hover:bg-brand-red/90 cursor-pointer text-sm text-white hidden md:block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
			>
				{labels.cta}
			</button>

			{/* Burger menu */}
			<div className="md:hidden">
				<button
					id="nav-menu-toggle"
					onClick={() => setOpen((value) => !value)}
					aria-label="Toggle navigation menu"
					aria-expanded={open}
					aria-controls="mobile-menu"
					className="text-brand-off-white transition focus:outline-none focus:ring-2 focus:ring-brand-red rounded p-2"
				>
					<svg
						className="h-12 w-12"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>

			{/* mobile menu */}
			<MobileMenu open={open} setOpen={setOpen} labels={labels} lang={lang} />
		</nav>
	);
};

export default Navbar;