"use client";

import styles from "./primaryButton.module.scss";

interface PrimaryButtonProps {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  variant = "secondary",
}) => {
  return (
    <button
      className={[
        variant === "secondary" ? styles.secondary : "",
        styles.button,
      ].join(" ")}
      onClick={onClick}>
      {children}
    </button>
  );
};
