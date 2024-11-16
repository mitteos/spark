"use client";

import Image from "next/image";
import Logo from "@/static/icons/logo.svg";
import styles from "./layout.module.scss";
import { BackButton } from "@/components/UI/BackButton/BackButton";
import { usePathname } from "next/navigation";
import ListIcon from "@/static/icons/gamesList.svg";
import CloseIcon from "@/static/icons/close.svg";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { gameActions } from "@/store/reducers/gameSlice";
import { gamesMock } from "@/mocks/gameMock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [listIsActive, setListIsActive] = useState(false);
  const dispatch = useAppDispatch();

  const handleSetActiveSlide = (index: number) => {
    setListIsActive(false);
    dispatch(gameActions.setSelectedGameId(index));
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
        {pathname === "/games" && (
          <div className={styles.list}>
            <Image
              src={ListIcon}
              alt="list"
              onClick={() => setListIsActive(true)}
            />
            <div
              className={[listIsActive && styles.active, styles.container].join(
                " "
              )}>
              <div className={styles.inner}>
                <Image
                  src={CloseIcon}
                  alt="close"
                  className={styles.close}
                  onClick={() => setListIsActive(false)}
                />
                <p className={styles.title}>Игры</p>
                <div className={styles.list}>
                  {gamesMock.map((game, index) => (
                    <div className={styles.item} key={game.id}>
                      <p onClick={() => handleSetActiveSlide(index)}>
                        {game.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={[
          pathname === "/games" && styles.mainGames,
          styles.main,
        ].join(" ")}>
        {children}
      </div>
    </div>
  );
}
