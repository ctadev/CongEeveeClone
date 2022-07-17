import { useState, useEffect } from "react";
import { client, urlFor } from "../../../lib/client";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import s from "../slug.module.scss";
import Image from "next/image";
import split from "../../../public/logo-purple.svg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addCartWithQuantity } from "../../../redux/slices/cart";
import { toast, Toaster } from "react-hot-toast";
import getStripe from "../../../lib/getStripe";

const ProductDetails = ({ product, allProducts }) => {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [toggleDesc, setToggleDesc] = useState(true);
  const dispatch = useDispatch();

  const handleBuyNow = async () => {
    const item = [{ ...product, cartQuantity: quantity }];
    console.log(item);

    const stripe = await getStripe();

    const response = await fetch("/api/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  const notify = (item) => {
    const prod = { ...item, cartQuantity: quantity };
    toast.success("Added to Cart", {
      position: "bottom-center",
      autoClose: 1000,
    });
    dispatch(addCartWithQuantity(prod));
  };

  const stars = {
    star: function (rating) {
      const starPercent = (rating / 5) * 100;
      const starRounded = `${Math.round(starPercent / 10) * 10}%`;
      return starRounded;
    },
  };

  const quantityBtn = (ar) => {
    if (ar === "add") {
      const add = quantity + 1;
      setQuantity(add);
    }
    if (ar === "minus") {
      if (quantity > 1) {
        const minus = quantity - 1;
        setQuantity(minus);
      }
    }
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main className={s.details}>
      <div className={s.inner_container}>
        <section className={s.product_images}>
          <div className={s.big_image_container}>
            <Image
              src={urlFor(product.mainImage && product.mainImage[index]).url()}
              alt=""
              layout="fill"
              objectFit="contain"
              className={s.big_image}
            />
          </div>
          <aside className={s.product_previews}>
            {product.mainImage?.map((item, i) => (
              <div key={item._key} className={s.small_image_container}>
                <Image
                  src={urlFor(item).url()}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  onMouseOver={() => setIndex(i)}
                  className={s.small_image}
                />
              </div>
            ))}
          </aside>
        </section>

        <section className={s.product_info}>
          <div className={s.title}>
            <h1>{product.name}</h1>
            {product.ratings && (
              <div className={s.rating}>
                <div className={s.star_container}>
                  <div className={s.outer_star}>
                    <StarOutlineIcon className={s.icon} />
                    <StarOutlineIcon className={s.icon} />
                    <StarOutlineIcon className={s.icon} />
                    <StarOutlineIcon className={s.icon} />
                    <StarOutlineIcon className={s.icon} />
                    <div
                      className={s.inner_star}
                      style={{ width: `${stars.star(product.ratings)}` }}
                    >
                      <StarIcon className={s.icon} />
                      <StarIcon className={s.icon} />
                      <StarIcon className={s.icon} />
                      <StarIcon className={s.icon} />
                      <StarIcon className={s.icon} />
                    </div>
                  </div>
                </div>
                <p className={s.reviews_text}>
                  &nbsp;{product.reviews} reviews
                </p>
              </div>
            )}
            {product.sales ? (
              <div className={s.price_container}>
                <p className={s.strike_through}>
                  {formatter.format(product.price)}
                </p>
                <p>{formatter.format(product.sales)}</p>
              </div>
            ) : (
              <div className={s.price_container}>
                <p>{formatter.format(product.price)}</p>
              </div>
            )}
            <div className={s.split_container}>
              <p>From {formatter.format(product.price / 3)} /month with</p>
              <Image
                src={split}
                alt=""
                height={30}
                width={100}
                className={s.split_image}
              />
              <span>Learn more</span>
            </div>
          </div>

          <div className={s.product_cart}>
            <p>Quantity</p>
            <div className={s.quantity_container}>
              <button onClick={() => quantityBtn("minus")}>
                <RemoveIcon />
              </button>
              <button className={s.number} disabled>
                {quantity}
              </button>
              <button onClick={() => quantityBtn("add")}>
                <AddIcon />
              </button>
            </div>

            <button onClick={() => notify(product)} className={s.add_btn}>
              Add To Cart
            </button>
            <button className={s.buy_btn} onClick={handleBuyNow}>
              Buy it Now
            </button>
          </div>

          <div
            className={s.description_container}
            onClick={() => setToggleDesc(!toggleDesc)}
          >
            <div className={s.desc_title}>
              <h1>Description</h1>
              <div
                className={!toggleDesc ? `${s.icon} ${s.show}` : s.icon}
              ></div>
            </div>
            <div
              className={
                toggleDesc
                  ? s.desc_details_container
                  : `${s.desc_details_container} ${s.hide}`
              }
            >
              <p>{product.description}</p>
            </div>
          </div>
        </section>
      </div>
      <Toaster />
    </main>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == "euc"] {
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="euc" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const allProduct = '*[_type=="euc"]';
  const allProducts = await client.fetch(allProduct);

  return {
    props: {
      product,
      allProducts,
    },
  };
};
