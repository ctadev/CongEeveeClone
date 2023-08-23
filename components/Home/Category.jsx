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
                src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F56a0bd1afc2d9cdb095c8914e61600ebb4437061-720x720.webp&w=1920&q=75"
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
                src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F7d482b6c9884d534c82f84ce497af7f9a9de80e8-480x480.webp&w=1920&q=75"
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
                src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F352bb99a8cbe312614d187715eb6b24de6fcae1e-480x480.webp&w=1920&q=75"
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
                src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2Fc05cc6cfe928386dd48edefc91dd1e65f39fc7ef-480x480.webp&w=1920&q=75"
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
                src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2Ff1de867dc823bf13379fdd76edb2bf40c25db1e3-480x480.webp&w=1920&q=75"
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
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F8911ad831031ad0758ad4c7d3fc37715dcfe942b-480x480.webp&w=1920&q=75"
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
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F39340404170f538e979e1828de369384645b5ea9-480x480.webp&w=1920&q=75"
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
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F94d903e5d4c6fe53b20074ce2f1fd5698200190f-480x480.webp&w=1920&q=75"
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
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F6cefc977b40b83bb5e1cd2323fa146cb366889ec-480x480.webp&w=1920&q=75"
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
