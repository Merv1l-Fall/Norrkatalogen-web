"use client";
import Link from "next/link";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useRef, useEffect } from "react";

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
};

const MobileMenu = ({ open, setOpen, labels, lang }: Props) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
                <Link
                  href={`/${lang}`}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2 py-1"
                >
                  {labels.home}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2 py-1"
                >
                  {labels.about}
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red rounded px-2 py-1"
                >
                  {labels.contact}
                </Link>
              </nav>

              {/* CTA Button */}
              <button
                aria-label={labels.cta}
                className="w-full rounded-lg bg-brand-red px-4 py-2 transition hover:bg-brand-red/90 cursor-pointer text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
              >
                {labels.cta}
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;