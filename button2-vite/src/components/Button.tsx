import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  href,
  target = '_self',
  width,
  height
}) => {
  const styles = { width, height };

  // リンクボタンの場合
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`button ${loading ? 'loading' : ''}`}
        style={styles}
        onClick={disabled || loading ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled || loading}
      >
        {loading ? 'Loading...' : label}
      </a>
    );
  }

  // 通常のボタンの場合
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`button ${loading ? 'loading' : ''}`}
      type={type}
      style={styles}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default Button;
