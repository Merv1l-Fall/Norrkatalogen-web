"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NorrButton from "@/components/ui/buttons/NorrButton";

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
            <div className="flex items-center justify-center">
                <Link href={`/${lang}`} aria-label={`Norrkatalogen - ${labels.home}`}>
                    <Image src="/NorrkatalogenWhite.svg" alt="" width={180} height={50} />
                </Link>
            </div>

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

            <NorrButton variant="primary" size="md" className="my-auto hidden md:inline-flex">
					{labels.cta}
				</NorrButton>

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

            <MobileMenu open={open} setOpen={setOpen} labels={labels} lang={lang} />
        </nav>
    );
};

export default Navbar;
