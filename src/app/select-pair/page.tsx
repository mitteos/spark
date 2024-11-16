"use client";

import { BackButton } from "@/components/UI/BackButton/BackButton";
import styles from "./page.module.scss";
import { PrimaryButton } from "@/components/UI/PrimaryButton/PrimaryButton";
import { useState } from "react";
import { PairInfo } from "@/components/UI/PairInfo/PairInfo";
import { PlayerListMini } from "@/components/Player/PlayerListMini/PlayerListMini";
import { PairItem } from "@/components/Pair/PairItem/PairItem";
import { useAppSelector } from "@/store/hooks";

export default function SelectPair() {
  const [infoIsActive, setInfoIsActive] = useState(false);
  const { pairs } = useAppSelector((state) => state.pairReducer);

  const handleOpenInfo = () => {
    setInfoIsActive(true);
    console.log("open");
  };

  const handleCloseInfo = () => {
    setInfoIsActive(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.back}>
          <BackButton />
        </div>
        <p className={styles.title}>Spark</p>
        <div className={styles.info}>
          <div onClick={handleOpenInfo}>
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <desc>Created with Pixso.</desc>
              <defs />
              <rect
                id="Frame 23"
                width="30.000000"
                height="30.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <circle
                id="Ellipse 12"
                cx="15.000000"
                cy="15.000000"
                r="14.000000"
                stroke="#FFFFFF"
                strokeOpacity="0.540000"
                strokeWidth="2.000000"
              />
              <path
                id="i"
                d="M16.41 22L13.57 22L13.57 11.43L16.41 11.43L16.41 22ZM13.41 8.69C13.41 8.27 13.55 7.92 13.83 7.65C14.12 7.38 14.5 7.24 14.99 7.24C15.47 7.24 15.86 7.38 16.14 7.65C16.43 7.92 16.57 8.27 16.57 8.69C16.57 9.12 16.43 9.48 16.14 9.75C15.85 10.02 15.47 10.16 14.99 10.16C14.51 10.16 14.13 10.02 13.84 9.75C13.55 9.48 13.41 9.12 13.41 8.69Z"
                fill="#FFFFFF"
                fillOpacity="0.540000"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <PairInfo isActive={infoIsActive} onClose={handleCloseInfo} />
        </div>
      </div>
      <div className={styles.main}>
        <p className={styles.title}>Парочки</p>
        <PlayerListMini />
        {pairs.map((pair) => (
          <PairItem key={pair.id} pair={pair} />
        ))}
      </div>
      <div className={styles.footer}>
        <p className={styles.help}>Нажми на жертву, чтобы добавить в пару</p>
        <PrimaryButton>
          {pairs.length < 1 ? "Пропустить" : "Начать"}
        </PrimaryButton>
      </div>
    </div>
  );
}
