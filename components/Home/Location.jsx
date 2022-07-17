import React from "react";
import s from "./location.module.scss";
import Image from "next/image";

const Location = () => {
  return (
    <main className={s.store}>
      <div className={s.inner_container}>
        <section className={s.store_image}>
          <Image
            alt=""
            src="https://cdn.shopify.com/s/files/1/0470/9682/3967/files/IMG_6013_540x.jpg?v=1626043253"
            layout="fill"
            objectFit="contain"
          />
        </section>
        <section className={s.store_info}>
          <h1>Vancouver Store</h1>
          <p>
            Vancouver&apos;s first exclusive personal electric vehicle store is
            located at 230 E Pender St. Designed to be an immersive hands-on
            experience, eevee&apos;s is a one-stop-shop for electric scooters,
            eSkateboards, Onewheels, and electric unicycles (EUCs). Every model
            is available to demo and <span>free lessons</span> for the EUCs are
            available every Saturday and Sunday at 10:30am.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Location;
