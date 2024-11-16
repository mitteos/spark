"use client";

import { IPair } from "@/store/models/IPair";
import styles from "./pairItem.module.scss";
import { useAppDispatch } from "@/store/hooks";
import { pairActions } from "@/store/reducers/pairSlice";
import { playerActions } from "@/store/reducers/playerSlice";
import { useEffect } from "react";

interface PairItemProps {
  pair: IPair;
}

export const PairItem: React.FC<PairItemProps> = ({ pair }) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromPair = (playerId: number) => {
    dispatch(pairActions.removeFromPair({ id: pair.id, playerId }));
    dispatch(playerActions.removeInPair(playerId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {pair.players.map((player) => (
          <p
            className={styles.item}
            key={player.id}
            onClick={() => handleRemoveFromPair(player.id)}>
            {player.name}
          </p>
        ))}
      </div>
      <div className={styles.icon}>
        <svg
          width="50.000000"
          height="50.000000"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs>
            <clipPath id="clip36_1080">
              <rect
                id="7873699021586787807 1"
                rx="0.000000"
                width="49.000000"
                height="49.000000"
                transform="translate(0.500000 0.500000)"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
          </defs>
          <rect
            id="7873699021586787807 1"
            rx="0.000000"
            width="49.000000"
            height="49.000000"
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <g clipPath="url(#clip36_1080)">
            <path
              id="Vector"
              d="M11.89 49C14.81 49 17.54 47.86 19.6 45.8L28.8 36.6C30.86 34.54 32 31.81 32 28.89C32 24.07 28.9 19.88 24.29 18.47L23.7 20.38C27.47 21.53 30 24.95 30 28.89C30 31.27 29.07 33.51 27.39 35.19L18.19 44.39C16.51 46.07 14.27 47 11.89 47C6.99 47 3 43 3 38.1C3 35.72 3.92 33.48 5.6 31.8L14.8 22.6C15.09 22.31 15.41 22.04 15.73 21.79L14.53 20.2C14.13 20.5 13.75 20.83 13.39 21.19L4.19 30.39C2.13 32.45 1 35.18 1 38.1C1 44.11 5.88 49 11.89 49Z"
              fill="#FFFFFF"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M38.1 1C35.18 1 32.45 2.13 30.39 4.19L21.19 13.39C19.13 15.45 18 18.18 18 21.1C18 26.3 21.7 30.8 26.81 31.8L27.19 29.83C23.02 29.02 20 25.35 20 21.1C20 18.72 20.92 16.48 22.6 14.8L31.8 5.6C33.48 3.92 35.72 3 38.1 3C43 3 47 6.99 47 11.89C47 14.27 46.07 16.51 44.39 18.19L35.19 27.39C34.93 27.65 34.66 27.89 34.38 28.1L35.61 29.68C35.95 29.41 36.29 29.12 36.6 28.8L45.8 19.6C47.86 17.54 49 14.81 49 11.89C49 5.89 44.11 1 38.1 1Z"
              fill="#FFFFFF"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
