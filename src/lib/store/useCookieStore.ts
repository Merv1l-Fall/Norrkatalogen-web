import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CookieState {
	hasConsented: boolean;
	consentGiven: boolean;
	acceptCookies: () => void;
	rejectCookies: () => void;
	resetCookieConsent: () => void;
}

export const useCookieStore = create<CookieState>()(
	persist(
		(set) => ({
			hasConsented: false,
			consentGiven: false,
			acceptCookies: () => set({ hasConsented: true, consentGiven: true }),
			rejectCookies: () => set({ hasConsented: true, consentGiven: false }),
			resetCookieConsent: () => set({ hasConsented: false, consentGiven: false }),
		}),
		{
			name: 'cookie-consent-storage',
			partialize: (state) => ({
				hasConsented: state.hasConsented,
				consentGiven: state.consentGiven,
			}),
		}
	)
);
