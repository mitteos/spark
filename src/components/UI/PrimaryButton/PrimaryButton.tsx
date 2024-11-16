"use client";

import styles from "./primaryButton.module.scss";

interface PrimaryButtonProps {
  onClick?: () => void;
  children: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
