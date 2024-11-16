"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import styles from "./playerListMini.module.scss";
import { pairActions } from "@/store/reducers/pairSlice";
import { IPlayer } from "@/store/models/IPlayer";
import { IPair } from "@/store/models/IPair";
import { playerActions } from "@/store/reducers/playerSlice";

export const PlayerListMini: React.FC = () => {
  const { players } = useAppSelector((state) => state.playerReducer);
  const { pairs } = useAppSelector((state) => state.pairReducer);
  const dispatch = useAppDispatch();

  const handleAddToPair = (player: IPlayer) => {
    const incompletePair = pairs.find((pair) => pair.players.length < 2);

    if (incompletePair) {
      dispatch(pairActions.addPlayerToPair({ id: incompletePair.id, player }));
      dispatch(playerActions.setInPair(player.id));
      return;
    }

    const newPair: IPair = {
      id: Date.now(),
      players: [player],
    };
    dispatch(pairActions.addPair(newPair));
    dispatch(playerActions.setInPair(player.id));
  };

  return (
    <div className={styles.container}>
      {players
        .filter((player) => !player.inPair)
        .map((player) => (
          <p
            key={player.id}
            className={[
              player.gender == "male" ? styles.male : styles.female,
              styles.item,
            ].join(" ")}
            onClick={() => handleAddToPair(player)}>
            {player.name}
          </p>
        ))}
    </div>
  );
};
