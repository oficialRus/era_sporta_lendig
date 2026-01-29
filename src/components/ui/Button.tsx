import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps =
  | (CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
    ghost: "text-white hover:text-red-600",
    // для совместимости со старым кодом
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const composed = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && typeof props.href === "string") {
    const { href, ...rest } = props;
    return (
      <a className={composed} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={composed} {...props}>
      {children}
    </button>
  );
};

