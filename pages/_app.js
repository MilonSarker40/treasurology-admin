import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import MainApp from "@/components/MainApp/MainApp";

export default function App({ Component, pageProps }) {
  return(
    // <Layout>
    //    <Component {...pageProps} />
    // </Layout>
    <MainApp Component={Component} pageProps={pageProps}/>
  )
}
