import { useState, useEffect } from "react";
import { urlFor } from "../../lib/client";
import Image from "next/image";
import s from "./cart.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalSlice";
import {
  removeItem,
  decreaseCart,
  addCart,
  getTotal,
} from "../../redux/slices/cart";
import getStripe from "../../lib/getStripe";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modalSlice);
  const cart = useSelector((state) => state.cartSlice);
  const [items, setItems] = useState([]);

  const handleCheckOut = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:  JSON.stringify(cart),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    setItems(cart.cartItem);
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <main className={modal ? s.carts : `${s.carts} ${s.hide}`}>
      <section className={s.title}>
        <h1>Your Cart</h1>
        <CloseIcon
          className={s.close}
          onClick={() => dispatch(toggleModal())}
        />
      </section>

      <section className={s.cart_list}>
        {items.length < 1 && (
          <div className={s.empty_cart}>
            <ProductionQuantityLimitsIcon />
            <h1>Your Cart is Empty</h1>
          </div>
        )}

        {items.map((item) => (
          <div key={item._id} className={s.cart_item}>
            <div className={s.big_image_container}>
              <Image
                src={urlFor(item.mainImage && item.mainImage[0]).url()}
                alt=""
                layout="fill"
                objectFit="contain"
                className={s.big_image}
              />
            </div>

            <div className={s.cart_quantities}>
              <h2>{item.name}</h2>
              <aside>
                <RemoveIcon
                  onClick={() => dispatch(decreaseCart(item))}
                  className={s.icon}
                />
                <label>{item.cartQuantity}</label>
                <AddIcon
                  onClick={() => dispatch(addCart(item))}
                  className={s.icon}
                />
              </aside>
            </div>

            <div className={s.cart_delete}>
              <DeleteIcon
                onClick={() => dispatch(removeItem(item))}
                className={s.delete_icon}
              />
              {item.sales ? (
                <div className={s.price_container}>
                  <p className={s.strike_through}>
                    {formatter.format(item.price)}
                  </p>
                  <p className={s.special_price}>
                    {formatter.format(item.sales)}
                  </p>
                </div>
              ) : (
                <div className={s.price_container}>
                  <p>{formatter.format(item.price)}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className={s.cart_price}>
        <div className={s.cart_total_quantity}>
          <h3>Subtotal ( {cart.cartTotalQuantity} items )</h3>
          <h4>{formatter.format(cart.cartTotal)}</h4>
        </div>

        <button onClick={handleCheckOut}>
          <ShoppingBasketIcon />
          <label>Checkout</label>
        </button>
      </section>
    </main>
  );
};

export default Cart;
