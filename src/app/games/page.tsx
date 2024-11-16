"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./page.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import GameLogo from "@/static/images/games/game1.png";
import { PrimaryButton } from "@/components/UI/PrimaryButton/PrimaryButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import type { Swiper as SwiperClass } from "swiper";

export const gamesMock = [
  {
    id: 1,
    title: "Правда или действие",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar erat. Mauris nec mi nunc.",
    href: "/games/truth-or-action",
  },
  {
    id: 2,
    title: "Правда или выпивка",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar erat. Mauris nec mi nunc.",
    href: "/games/truth-or-drink",
  },
  {
    id: 3,
    title: "Я никогда не...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar erat. Mauris nec mi nunc.",
    href: "/games/never-did",
  },
  {
    id: 4,
    title: "Угадай, кто ты?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar erat. Mauris nec mi nunc.",
    href: "/games/guess-who",
  },
  {
    id: 5,
    title: "Позы",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar erat. Mauris nec mi nunc.",
    href: "/games/poses",
  },
  {
    id: 6,
    title: "Кубики",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar erat. Mauris nec mi nunc.",
    href: "/games/cubes",
  },
];

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const { selectedGameId } = useAppSelector((state) => state.gameReducer);
  const router = useRouter();

  const handleSelectGame = (id: number) => {
    setSelectedGame(id);
  };

  const handleStartGame = () => {
    router.push(gamesMock[selectedGame].href);
  };

  useEffect(() => {
    setSelectedGame(selectedGameId);
    if (swiperInstance) {
      swiperInstance.slideTo(selectedGameId);
    }
  }, [selectedGameId, swiperInstance]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Swiper
          modules={[Pagination]}
          className={styles.swiper}
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={15}
          onSlideChange={(e) => handleSelectGame(e.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}>
          {gamesMock.map((game) => (
            <SwiperSlide key={game.id}>
              <div className={styles.slide}>
                <Image src={GameLogo} alt="logo" />
                <p className={styles.title}>{game.title}</p>
                <p className={styles.description}>{game.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.button}>
        <PrimaryButton variant="primary" onClick={handleStartGame}>
          Начать
        </PrimaryButton>
      </div>
    </div>
  );
}
