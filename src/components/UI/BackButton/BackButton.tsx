"use client";

import { useRouter } from "next/navigation";

export const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleBack}>
      <g clipPath="url(#clip0_32_2175)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6201 0.990059C10.1301 0.500059 9.34006 0.500059 8.85006 0.990059L0.540059 9.30006C0.150059 9.69006 0.150059 10.3201 0.540059 10.7101L8.85006 19.0201C9.34006 19.5101 10.1301 19.5101 10.6201 19.0201C11.1101 18.5301 11.1101 17.7401 10.6201 17.2501L3.38006 10.0001L10.6301 2.75006C11.1101 2.27006 11.1101 1.47006 10.6201 0.990059Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_2175">
          <rect width="11" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
