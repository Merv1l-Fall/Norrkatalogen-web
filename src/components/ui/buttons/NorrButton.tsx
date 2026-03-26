import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface NorrButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	isLoading?: boolean;
	children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary: "bg-brand-red hover:bg-brand-red/90 text-brand-off-white",
	secondary: "bg-brand-off-white hover:bg-brand-off-white/90 text-brand-off-black",
	outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red/10",
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: "px-3 py-1.5 text-sm",
	md: "px-6 py-3 text-base",
	lg: "px-8 py-4 text-lg",
};

const NorrButton = React.forwardRef<HTMLButtonElement, NorrButtonProps>(
	(
		{
			variant = "primary",
			size = "md",
			isLoading = false,
			disabled = false,
			className = "",
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				disabled={disabled || isLoading}
				className={`
          rounded-lg transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
				{...props}
			>
				{isLoading ? (
					<span className="flex items-center gap-2">
						<span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
						Loading...
					</span>
				) : (
					children
				)}
			</button>
		);
	}
);

NorrButton.displayName = "NorrButton";

export default NorrButton;
