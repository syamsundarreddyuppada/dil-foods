import Layout from "@/components/layout/Layout";
import store from "@/store/store";
import "@/styles/globals.scss";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
