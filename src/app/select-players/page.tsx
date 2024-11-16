"use client";

import { BackButton } from "@/components/UI/BackButton/BackButton";
import styles from "./page.module.scss";
import { PrimaryButton } from "@/components/UI/PrimaryButton/PrimaryButton";
import { PlayerItem } from "@/components/Player/PlayerItem/PlayerItem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { playerActions } from "@/store/reducers/playerSlice";
import { IPlayer } from "@/store/models/IPlayer";
import Image from "next/image";
import Logo from "@/static/icons/logo.svg";
import Link from "next/link";

export default function SelectPlayers() {
  const { players } = useAppSelector((state) => state.playerReducer);
  const dispatch = useAppDispatch();

  const handleAddPlayer = () => {
    const newPlayer: IPlayer = {
      id: Date.now(),
      name: "",
      gender: "male",
      inPair: false,
    };
    dispatch(playerActions.addPlayer(newPlayer));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.back}>
          <BackButton />
        </div>
        <div className={styles.title}>
          <Image src={Logo} alt="logo" />
        </div>
        <p></p>
      </div>
      <div className={styles.main}>
        <p className={styles.title}>Жертвы вечеринки</p>
        <div className={styles.player__list}>
          {!players.length && <p className={styles.empty}>Нам нужны жертвы!</p>}
          {players.map((player) => (
            <PlayerItem key={player.id} player={player} />
          ))}
        </div>
        <PrimaryButton onClick={handleAddPlayer}>
          {players.length ? "Подкинуть еще одного" : "Добавить первую"}
        </PrimaryButton>
      </div>
      <div className={styles.footer}>
        <Link href={players.length < 3 ? "/games/poses" : "/select-pair"}>
          <PrimaryButton>Продолжить</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}
