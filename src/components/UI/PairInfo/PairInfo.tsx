"use client";

import styles from "./pairInfo.module.scss";

interface PairInfoProps {
  isActive: boolean;
  onClose: () => void;
}

export const PairInfo: React.FC<PairInfoProps> = ({ isActive, onClose }) => {
  return (
    <div
      className={[isActive ? styles.active : "", styles.container].join(" ")}
      onClick={onClose}>
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <svg
          width="30.000000"
          height="30.000000"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={styles.info__icon}>
          <desc>Created with Pixso.</desc>
          <defs />
          <rect
            id="Frame 23"
            width="30.000000"
            height="30.000000"
            fill="#000"
            fillOpacity="0"
          />
          <circle
            id="Ellipse 12"
            cx="15.000000"
            cy="15.000000"
            r="14.000000"
            stroke="#000"
            strokeOpacity="0.540000"
            strokeWidth="2.000000"
          />
          <path
            id="i"
            d="M16.41 22L13.57 22L13.57 11.43L16.41 11.43L16.41 22ZM13.41 8.69C13.41 8.27 13.55 7.92 13.83 7.65C14.12 7.38 14.5 7.24 14.99 7.24C15.47 7.24 15.86 7.38 16.14 7.65C16.43 7.92 16.57 8.27 16.57 8.69C16.57 9.12 16.43 9.48 16.14 9.75C15.85 10.02 15.47 10.16 14.99 10.16C14.51 10.16 14.13 10.02 13.84 9.75C13.55 9.48 13.41 9.12 13.41 8.69Z"
            fill="#000"
            fillOpacity="0.540000"
            fillRule="nonzero"
          />
        </svg>
        <p className={styles.title}>Что такое «Парочки»?</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
          pulvinar erat. Mauris nec mi nunc
        </p>
      </div>
    </div>
  );
};
