import React from "react";
import s from "./category.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const mobileNavigation = (path) => {
    router.push(`/category/${path}`);
  };

  const dropDownNavigation2 = (path) => {
    router.push(`/category/accessories/${path}`);
  };

  return (
    <main className={s.category}>
      <ul className={s.inner_container}>
        <section>
          <li onClick={() => mobileNavigation("eucs")}>
            <h1>EUCs</h1>
            <p>View All</p>
            <div className={s.image_container}>
              <Image
                alt=""
                src="https://cdn.shopify.com/s/files/1/0470/9682/3967/collections/DSC05517_720x.png?v=1607315074"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </li>
          <li onClick={() => mobileNavigation("escooters")}>
            <h1>eScooters</h1>
            <p>View All</p>
            <div className={s.image_container}>
              <Image
                alt=""
                src="https://cdn.shopify.com/s/files/1/0470/9682/3967/collections/scooter_web_720x.png?v=1607319212"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </li>
          <li onClick={() => mobileNavigation("eskateboards")}>
            <h1>eSkateboards</h1>
            <p>View All</p>
            <div className={s.image_container}>
              <Image
                alt=""
                src="https://cdn.shopify.com/s/files/1/0470/9682/3967/collections/eskate_web_720x.png?v=1607314644"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </li>
          <li onClick={() => mobileNavigation("onewheels")}>
            <h1>Onewheels</h1>
            <p>View All</p>
            <div className={s.image_container}>
              <Image
                alt=""
                src="https://cdn.shopify.com/s/files/1/0470/9682/3967/collections/pint_web_720x.png?v=1607319050"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </li>
        </section>

        <aside>
          <ul>
            <li
              className={s.top_product}
              onClick={() => mobileNavigation("accessories")}
            >
              <Image
                alt=""
                src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/XiaomiMiAirCompressorPump_360x.jpg?v=1673384021"
                layout="fill"
                objectFit="cover"
              />
              <div className={s.title}>
                <h1 className={s.top}>Top</h1>
                <h1 className={s.product}>Products</h1>
              </div>
              <p>View All</p>
            </li>
            <li
              onClick={() =>
                dropDownNavigation2("lazyrolling-armored-soft-hoodie")
              }
            >
              <div className={s.acce_container}>
                <Image
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/NavyLazyrollingHoodie_480x.png?v=1647378231"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2>Lazyrolling Armored Soft Hoodie</h2>
              <p>$289</p>
            </li>
            <li onClick={() => dropDownNavigation2("tsg-evolution-helmet")}>
              <div className={s.acce_container}>
                <Image
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/TSG_Evolution_Satin_Black_Front_480x.png?v=1618440551"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2>TSG Evolution Helmet</h2>
              <p>$89.99</p>
            </li>
            <li
              onClick={() =>
                dropDownNavigation2("tsg-pass-pro-full-face-helmet-bonus-visor")
              }
            >
              <div className={s.acce_container}>
                <Image
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/TSGPassProMattBlackRightAngle_480x.png?v=1647648095"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2>TSG Pass Pro Full Face Helmet + Bonus Visor</h2>
              <p>$369.99</p>
            </li>
            <li
              className={s.small_pump}
              onClick={() =>
                dropDownNavigation2("xiaomi-mi-portable-air-compressor-pump")
              }
            >
              <div className={s.acce_container}>
                <Image
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/XiaomiMiAirCompressorPump_360x.jpg?v=1673384021"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2>Xiaomi Mi Portable Air Compressor Pump</h2>
              <p>$79.99</p>
            </li>
          </ul>
        </aside>
      </ul>
    </main>
  );
};

export default Category;
