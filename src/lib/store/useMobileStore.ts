import { create } from "zustand";
import { useEffect } from "react";

type MobileStore = {
	isMobile: boolean;
	setIsMobile: (isMobile: boolean) => void;
};

export const useMobileStore = create<MobileStore>((set) => ({
	isMobile: false,
	setIsMobile: (isMobile) => set({ isMobile }),
}));

// Hook to initialize mobile detection (call this once in a client component)
export const useInitMobileDetection = () => {
	useEffect(() => {
		const handleResize = () => {
			useMobileStore.setState({ isMobile: window.innerWidth < 768 });
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
};
