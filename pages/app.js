import Layout from "../components/Layout/Layout";
// import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'

const TempApp = ({ Component, pageProps }) => {
    return(
        <Layout>
           <Component {...pageProps} />
        </Layout>
    )
}

export default TempApp;

// export default function App({ Component, pageProps }) {
//   return(
//     <Layout>
//        <Component {...pageProps} />
//     </Layout>
//   )
// }
