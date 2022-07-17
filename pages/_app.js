import "../styles/globals.css";
import Layout from "../components/Home/Layout";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { useSelector } from "react-redux";
import Cart from "../components/Home/Cart";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
