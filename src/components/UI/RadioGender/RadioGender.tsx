"use client";

import styles from "./radioGender.module.scss";
import { IPlayer } from "@/store/models/IPlayer";
import { useAppDispatch } from "@/store/hooks";
import { playerActions } from "@/store/reducers/playerSlice";

interface RadioGenderProps {
  playerInfo: IPlayer;
}

export const RadioGender: React.FC<RadioGenderProps> = ({ playerInfo }) => {
  const dispatch = useAppDispatch();

  const handleUpdatePlayerGender = () => {
    dispatch(
      playerActions.updatePlayerGender({
        id: playerInfo.id,
        gender: playerInfo.gender === "male" ? "female" : "male",
      })
    );
  };

  return (
    <div className={styles.container} onClick={handleUpdatePlayerGender}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        className={[
          playerInfo.gender === "female" ? styles.active__female : "",
          styles.female,
        ].join(" ")}>
        <g clipPath="url(#clip0_49_1012)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2903 16.8295C12.4495 16.8295 10.7202 16.1061 9.41811 14.7928C5.0805 10.412 8.19454 2.91763 14.2903 2.91763C20.382 2.91763 23.5043 10.4078 19.1626 14.7928C17.8605 16.1061 16.1312 16.8295 14.2903 16.8295ZM21.0916 16.7599C27.1888 10.6039 22.7961 0.135254 14.2862 0.135254C5.79563 0.135254 1.35192 10.6039 7.45048 16.7599C8.98132 18.3055 11.496 19.2126 12.8739 19.5006V22.4624H8.74019V25.2448H12.8739V28.0271H15.6297V25.2448H19.7633V22.4624H15.6297V19.5006C18.3854 19.2126 19.5594 18.3055 21.0916 16.7599Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_49_1012">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        xmlns="http://www.w3.org/2000/svg"
        className={[
          playerInfo.gender === "male" ? styles.active__male : "",
          styles.male,
        ].join(" ")}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.93513 25.336C6.07533 25.336 2.93513 22.1965 2.93513 18.3377C2.93513 14.4789 6.07533 11.3395 9.93513 11.3395C13.7949 11.3395 16.9351 14.4789 16.9351 18.3377C16.9351 22.1965 13.7949 25.336 9.93513 25.336ZM16.9351 0.135254V2.93455H23.3555L15.7955 10.4954C14.1603 9.27074 12.1359 8.53879 9.93513 8.53879C4.52273 8.53879 0.135132 12.9253 0.135132 18.3363C0.135132 23.7474 4.52273 28.1353 9.93513 28.1353C15.3475 28.1353 19.7351 23.7488 19.7351 18.3377C19.7351 16.1375 19.0001 14.1135 17.7765 12.4774L25.3351 4.92058V11.3325H28.1351V0.135254H16.9351Z"
        />
      </svg>
      <div
        className={[
          playerInfo.gender === "male" ? styles.active__background : "",
          styles.background,
        ].join(" ")}></div>
    </div>
  );
};
