import Head from "next/head";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import Location from "../components/Home/Location";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cong&apos;s Eevee&apos;s Ecommerces Clone</title>
        <meta name="description" content="PEV Ecommerce Clone by Cong Ta" />
        <link rel="icon" href="/letter-c.png" />
      </Head>
      <Banner />
      <Category />
      <Location />
    </div>
  );
}
