"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

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
};

const Header = ({ lang, labels }: Props) => {
	const pathname = usePathname();
	// Remove language prefix from pathname for comparison (e.g., "/en/about" -> "/about")
	const currentPath = `/${pathname.split("/").slice(2).join("/")}` || "/";

	return (
		<header className="sticky top-0 z-50 w-full bg-brand-off-black text-brand-off-white" role="banner">
			<div className="mx-auto max-w-7xl px-6">
				<Navbar lang={lang} labels={labels} currentPath={currentPath} />
			</div>
		</header>
	);
};

export default Header;