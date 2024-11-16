"use client";

import Image from "next/image";
import Logo from "@/static/icons/logo.svg";
import styles from "./layout.module.scss";
import { BackButton } from "@/components/UI/BackButton/BackButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <div className={styles.main}>{children}</div>
    </div>
  );
}
