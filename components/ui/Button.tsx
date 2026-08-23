import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] text-white hover:opacity-95 active:scale-[0.98] shadow-sm',
    secondary: 'bg-airbnb-charcoal text-white hover:bg-black active:scale-[0.98]',
    outline:
      'border border-airbnb-charcoal text-airbnb-charcoal hover:bg-airbnb-light active:scale-[0.98]',
    ghost: 'text-airbnb-charcoal hover:bg-airbnb-light active:scale-[0.98]',
    icon: 'p-2 rounded-full hover:bg-airbnb-light text-airbnb-charcoal active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          variants[variant],
          variant !== 'icon' && sizes[size],
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};
