import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#3448FF] text-white hover:bg-[#2a3ae0] shadow-[0_0_0_0_rgba(52,72,255,0.4)] hover:shadow-[0_0_24px_4px_rgba(52,72,255,0.25)] active:scale-[0.98]",
  secondary:
    "bg-white text-[#0a0a0a] border border-[#e6ebf0] hover:border-[#3448FF]/40 hover:text-[#3448FF] active:scale-[0.98]",
  ghost:
    "text-[#4a4a5a] hover:text-[#3448FF] hover:bg-[#3448FF]/[0.04]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-2.5 text-sm",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ease-out cursor-pointer whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
