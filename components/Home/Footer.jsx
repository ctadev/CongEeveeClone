import React from "react";
import s from "./footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Footer = () => {
  return (
    <main className={s.footer}>
      <div className={s.inner_container}>
        <section>
          <h1>eevee&apos;s</h1>
          <p>About</p>
          <p>Shipping & refund Policy</p>
          <p>Liability Waiver</p>
          <p>Warranty</p>
        </section>

        <section>
          <h1>Retail location</h1>
          <p>230 E Pender St Vancouver, BC V6A 1T3</p>
          <p>Hours:</p>
          <p>
            Monday-Friday 11:am-7pm Saturdays: 12pm-6pm Sundays & Holidays:
            12pm-5pm
          </p>
          <p>Accepted Payment Method:</p>
          <p>
            Visa, MasterCard, Amex, Debit, E-Transfer. Sorry, we do not accept
            cash payments.
          </p>
          <p>Call: (778) 873 1811</p>
          <p>Email: hello@eevees.com</p>
        </section>

        <section>
          <h1>Follow us</h1>
          <div className={s.icon_container}>
            <FacebookIcon className={s.icons} />
            <InstagramIcon className={s.icons} />
            <YouTubeIcon className={s.icons} />
          </div>
        </section>

        <section>
          <h1>Get the latest</h1>
          <p>
            Get the latest deals, rumours, product announcements, and more
            delivered straight to your inbox. Don&apos;t miss out!
          </p>
          <div className={s.text_container}>
            <input type="text" placeholder="Your email" />
            <button>
              <ArrowForwardIosIcon className={s.arrow} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Footer;
