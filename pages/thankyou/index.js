import { useEffect } from "react";
import s from "./index.module.scss";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";
import { runFireworks } from "../../lib/utils";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cart";

const home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    runFireworks();
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <main className={s.thankyou}>
      <section>
        <LocalMallIcon className={s.icon} />
        <h1>Thank You For Your Purchase</h1>
        <p>Check your email inbox for the receipt</p>

        <p>if you have any question, please email orders@example.com</p>
        <Link href="/">
          <button>Continue shopping</button>
        </Link>
      </section>
    </main>
  );
};

export default home;
