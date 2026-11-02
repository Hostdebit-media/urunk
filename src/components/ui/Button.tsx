import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'dark';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover px-[26px] py-[16px] font-semibold rounded-sm no-underline inline-flex items-center justify-center text-center transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed',
  secondary:
    'underline underline-offset-4 decoration-1 font-medium inline-flex items-center transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed',
  dark:
    'bg-primary text-white hover:bg-primary-light px-[26px] py-[16px] font-semibold rounded-sm no-underline inline-flex items-center justify-center text-center transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed',
};

export default function Button({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false,
  id,
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `${variantStyles[variant]} ${className}`.trim();

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (isInternal) {
      return (
        <Link
          id={id}
          to={href}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        id={id}
        href={href}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
