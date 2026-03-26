import type { NextConfig } from "next";

const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";

const remotePatterns = isUsingEmulator
	? [{ protocol: "http" as const, hostname: "localhost" }]
	: [{ protocol: "https" as const, hostname: "firebasestorage.googleapis.com" }];

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		remotePatterns,
	},
};

export default nextConfig;
