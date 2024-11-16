"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import posesImages from "@/static/images/poses";
import { PrimaryButton } from "@/components/UI/PrimaryButton/PrimaryButton";
import { useState } from "react";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Poses() {
  const [poseIndex, setPoseIndex] = useState(1);

  const handleNextPose = () => {
    setPoseIndex(getRandomNumber(0, 79));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Позы</div>
      <div className={styles.main}>
        <div className={styles.pose}>
          <Image src={posesImages[poseIndex]} alt="pose" />
          <div className={styles.title}>Поза 1</div>
        </div>
      </div>
      <div className={styles.footer}>
        <PrimaryButton onClick={handleNextPose}>Следующая</PrimaryButton>
      </div>
    </div>
  );
}
