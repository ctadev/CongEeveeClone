import React, { useState, useEffect } from "react";
import s from "./navbar.module.scss";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { useRouter } from "next/router";
import { toggleModal } from "../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../redux/slices/cart";

const NavBar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleEUC, setToggleEUC] = useState(false);
  const [toggleAcce, setToggleAcce] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [navFixed, setNavFixed] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice);

  function navscroll() {
    if (window.scrollY > 100) {
      setNavFixed(true);
    }
    if (window.scrollY == 0) {
      setNavFixed(false);
    }
  }

  useEffect(() => {
    dispatch(getTotal());
    window.addEventListener("scroll", navscroll);
    return () => window.removeEventListener("scroll", navscroll);
  }, [dispatch]);

  const toggleDropdownEuc = () => {
    setToggleEUC(!toggleEUC);
    setToggleAcce(false);
  };

  const toggleDropdownAcce = () => {
    setToggleEUC(false);
    setToggleAcce(!toggleAcce);
  };

  const mobileNavigation = (path) => {
    router.push(`/category/${path}`);
    setToggleHamburger(false);
    setToggleEUC(false);
    setToggleAcce(false);
  };

  const dropDownNavigation = (path) => {
    router.push(`/category/eucs/${path}`);
    setToggleHamburger(false);
    setToggleEUC(false);
    setToggleAcce(false);
  };

  const dropDownNavigation2 = (path) => {
    router.push(`/category/accessories/${path}`);
    setToggleHamburger(false);
    setToggleEUC(false);
    setToggleAcce(false);
  };

  return (
    <nav className={s.navbar}>
      <section className={`${s.top} ${navFixed && s.hide_top}`}>
        <MenuIcon
          className={s.hamburger_menu}
          onClick={() => setToggleHamburger(true)}
        />
        <Link href="/">
          <div className={s.logo_container}>
            <Image
              className={s.logo}
              src="https://cdn.shopify.com/s/files/1/0470/9682/3967/files/eevees_logo_outline_mint_animation_2_v2_7d413fc7-d966-4224-bb91-fb192cdfab88_300x.gif?v=1608410451"
              alt=""
              layout="fill"
            />
          </div>
        </Link>

        <div className={toggleSearch ? s.right_side : s.right_side_hide}>
          <div className={s.search_container}>
            <input type="text" placeholder="Search" />
            <SearchOutlinedIcon
              className={s.search_icon}
              onClick={() => setToggleSearch(!toggleSearch)}
            />
          </div>
          <div
            className={s.cart_container}
            onClick={() => dispatch(toggleModal())}
          >
            <ShoppingCartOutlinedIcon className={s.cart_icon} />
            {cart.cartTotalQuantity > 0 && (
              <label className={s.cart_label}>{cart.cartTotalQuantity}</label>
            )}
          </div>
        </div>
      </section>

      <section className={toggleHamburger ? s.bottom : `${s.bottom} ${s.hide}`}>
        <div className={s.close_container}>
          <CloseIcon
            className={s.close_icon}
            onClick={() => setToggleHamburger(false)}
          />
        </div>
        <ul>
          <div className={s.mobile_search}>
            <div className={s.search_container}>
              <input type="text" placeholder="Search" />
              <SearchOutlinedIcon className={s.search_icon} />
            </div>
          </div>
          <li className={s.euc_list}>
            <section className={s.info}>
              <div className={s.euc_mobile_container}>
                <p onClick={() => mobileNavigation("eucs")}>EUCs</p>
                <span>
                  {toggleEUC ? (
                    <RemoveIcon
                      onClick={() => setToggleEUC(false)}
                      className={s.icon}
                    />
                  ) : (
                    <AddIcon
                      onClick={() => setToggleEUC(true)}
                      className={s.icon}
                    />
                  )}
                </span>
              </div>
              <div
                className={s.euc_tablet_container}
                onClick={() => toggleDropdownEuc()}
              >
                {toggleEUC ? (
                  <div
                    className={s.euc_dropdown_true}
                    onClick={() => mobileNavigation("eucs")}
                  >
                    <p>EUCs</p>
                    <span>
                      <KeyboardArrowDownIcon className={s.arrow_icon} />
                    </span>
                  </div>
                ) : (
                  <>
                    <p>EUCs</p>
                    <span>
                      <KeyboardArrowDownIcon className={s.arrow_icon} />
                    </span>
                  </>
                )}
              </div>
            </section>
            <section
              className={
                toggleEUC ? s.euc_dropdown : `${s.euc_dropdown} ${s.hide}`
              }
            >
              <aside>
                <h1 onClick={() => mobileNavigation("eucs")}>EUCs</h1>
                <p className={s.all} onClick={() => mobileNavigation("eucs")}>
                  All
                </p>
                <p className={s.firstp}>Gotway / Begode</p>
                <p>InMotion</p>
                <p>King Song</p>
                <p>Veteran / Leaper Kim</p>
              </aside>
              <div onClick={() => dropDownNavigation("inmotion-v11")}>
                <Image
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2Fcb82ddd837224353b27657d363aadaf739ee8844-480x480.webp&w=1920&q=75"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>InMotion V11</h4>
                <p className={s.rating}>
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  &nbsp;16 reviews
                </p>
                <p>$2,799</p>
                <h5>View</h5>
              </div>
              <div onClick={() => dropDownNavigation("veteran-sherman-max")}>
                <Image
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F3371f7a1ac0a532d5fb692d9381da2a9d6c3f7dd-480x480.webp&w=1920&q=75"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>Veteran Sherman Max</h4>
                <p className={s.rating}>
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  &nbsp;12 reviews
                </p>
                <p>$4,999</p>
                <h5>View</h5>
              </div>
              <div
                onClick={() =>
                  dropDownNavigation("king-song-s18-molicel-version")
                }
              >
                <Image
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F48eb37f9d2479682ebf4fd2711115f3f0ad27233-480x480.webp&w=1920&q=75"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>King Song S18</h4>
                <p className={s.rating}>
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  &nbsp;15 reviews
                </p>
                <p>$2,899.99</p>
                <h5>View</h5>
              </div>
              <div onClick={() => dropDownNavigation("king-song-s22-eagle")}>
                <Image
                  src="https://cong-eevee-clone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fr0ycjkx1%2Fproduction%2F0d931278f4bd7ae6d968941ff9c77633143f0228-480x480.webp&w=1920&q=75"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>King Song S22 Eagle</h4>
                <p>$4,099</p>
                <h5>View</h5>
              </div>
            </section>
          </li>
          <li onClick={() => mobileNavigation("escooters")}>Escooters</li>
          <li onClick={() => mobileNavigation("eskateboards")}>Eskateboards</li>
          <li onClick={() => mobileNavigation("onewheels")}>Onewheel</li>
          <li className={s.accessories_list}>
            <section className={s.info}>
              <div className={s.acce_mobile_container}>
                <p onClick={() => mobileNavigation("accessories")}>
                  Accessories
                </p>
                <span>
                  {toggleAcce ? (
                    <RemoveIcon
                      onClick={() => setToggleAcce(false)}
                      className={s.icon}
                    />
                  ) : (
                    <AddIcon
                      onClick={() => setToggleAcce(true)}
                      className={s.icon}
                    />
                  )}
                </span>
              </div>
              <div
                className={s.acce_tablet_container}
                onClick={() => toggleDropdownAcce()}
              >
                {toggleAcce ? (
                  <div
                    className={s.acce_dropdown_true}
                    onClick={() => mobileNavigation("accessories")}
                  >
                    <p>Accessories</p>
                    <span>
                      <KeyboardArrowDownIcon className={s.arrow_icon} />
                    </span>
                  </div>
                ) : (
                  <>
                    <p>Accessories</p>
                    <span>
                      <KeyboardArrowDownIcon className={s.arrow_icon} />
                    </span>
                  </>
                )}
              </div>
            </section>
            <section
              className={
                toggleAcce ? s.acce_dropdown : `${s.acce_dropdown} ${s.hide}`
              }
            >
              <aside>
                <h1 onClick={() => mobileNavigation("accessories")}>
                  Accessories
                </h1>
                <p
                  className={s.all}
                  onClick={() => mobileNavigation("accessories")}
                >
                  All
                </p>
                <p className={s.firstp}>Apparel</p>
                <p>Safety Gear</p>
                <p>Helmets</p>
                <p>Security/Lock</p>
              </aside>
              <div
                onClick={() =>
                  dropDownNavigation2(
                    "tsg-pass-pro-full-face-helmet-bonus-visor"
                  )
                }
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/TSGPassProMattBlackRightAngle_480x.png?v=1647648095"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>TSG Pass Pro Full Face Helmet + Bonus Visor</h4>
                <p className={s.rating}>
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  &nbsp;24 reviews
                </p>
                <p>$369.99</p>
                <h5>View</h5>
              </div>
              <div
                onClick={() =>
                  dropDownNavigation2("xiaomi-mi-portable-air-compressor-pump")
                }
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/Mi_Portable_Air_Pump_480x.png?v=1615259209"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>Xiaomi Mi Portable Air Compressor Pump</h4>
                <p className={s.rating}>
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  &nbsp;15 reviews
                </p>
                <p>$129</p>
                <h5>View</h5>
              </div>
              <div
                onClick={() =>
                  dropDownNavigation2("lazyrolling-armored-soft-hoodie")
                }
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/NavyLazyrollingHoodie_480x.png?v=1647378231"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>Lazyrolling Armored Soft Hoodie</h4>
                <p className={s.rating}>
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  &nbsp;10 reviews
                </p>
                <p>$289</p>
                <h5>View</h5>
              </div>
              <div
                onClick={() => dropDownNavigation2("tsg-all-terrain-kneepads")}
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0470/9682/3967/products/TSG-All-Terrain_Kneepads-Front_375600b7-60ad-4d7a-a77d-c1cb5eb98426_480x.png?v=1618440515"
                  alt=""
                  height={200}
                  width={200}
                />
                <h4>TSG Kneepads</h4>
                <p className={s.rating}>
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  <StarIcon className={s.icon} />
                  &nbsp;5 reviews
                </p>
                <p>$39.99</p>
                <h5>View</h5>
              </div>
            </section>
          </li>
          {/* <li onClick={() => mobileNavigation("tour")}>Free EUC Lessons</li> */}
        </ul>
        <div
          className={
            navFixed ? s.search_and_cart : `${s.search_and_cart} ${s.hide}`
          }
        >
          <div className={toggleSearch ? s.right_side : s.right_side_hide}>
            <div className={s.search_container}>
              <input type="text" placeholder="Search" />
              <SearchOutlinedIcon
                className={s.search_icon}
                onClick={() => setToggleSearch(!toggleSearch)}
              />
            </div>
            <div
              className={s.cart_container}
              onClick={() => dispatch(toggleModal())}
            >
              <ShoppingCartOutlinedIcon className={s.cart_icon} />
              {cart.cartTotalQuantity > 0 && (
                <label className={s.cart_label}>{cart.cartTotalQuantity}</label>
              )}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};
export default NavBar;
