import React from "react";
import Image from "next/image";
import s from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={s.banner}>
      <Image
        alt=""
        src="https://cdn.shopify.com/s/files/1/0470/9682/3967/files/NewEUCsComingSoon_v4_1512x.png?v=1649620145"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
