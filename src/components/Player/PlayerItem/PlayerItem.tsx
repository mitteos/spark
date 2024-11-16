import { RadioGender } from "@/components/UI/RadioGender/RadioGender";
import { useState } from "react";
import styles from "./playerItem.module.scss";
import { IPlayer } from "@/store/models/IPlayer";
import { useAppDispatch } from "@/store/hooks";
import { playerActions } from "@/store/reducers/playerSlice";

interface PlayerItemProps {
  player: IPlayer;
}

export const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
  const [playerName, setPlayerName] = useState<string>(player.name);
  const dispatch = useAppDispatch();

  const handleRemovePlayer = () => {
    dispatch(playerActions.removePlayer(player.id));
  };

  const handleUpdatePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
    dispatch(
      playerActions.updatePlayerName({ id: player.id, name: e.target.value })
    );
  };

  return (
    <div className={styles.player__row}>
      <RadioGender playerInfo={player} />
      <input
        type="text"
        className={styles.name}
        placeholder="Имя, пж"
        value={playerName}
        onChange={(e) => handleUpdatePlayerName(e)}
      />
      <div className={styles.remove} onClick={handleRemovePlayer}>
        <svg
          width="21.000000"
          height="21.000000"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs>
            <clipPath id="clip2_2981">
              <rect
                id="Frame 23"
                width="21.000000"
                height="21.000000"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
          </defs>
          <rect
            id="Frame 23"
            width="21.000000"
            height="21.000000"
            fillOpacity="1.000000"
          />
          <g clipPath="url(#clip2_2981)">
            <rect
              id="Rectangle 38"
              x="2.984375"
              y="3.932861"
              rx="1.184014"
              width="2.368028"
              height="19.733564"
              transform="rotate(-45.879 2.984375 3.932861)"
              fill="#646464"
              fillOpacity="1.000000"
            />
            <rect
              id="Rectangle 39"
              x="4.632935"
              y="18.099121"
              rx="1.184014"
              width="2.368028"
              height="19.733564"
              transform="rotate(-135.879 4.632935 18.099121)"
              fill="#646464"
              fillOpacity="1.000000"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
