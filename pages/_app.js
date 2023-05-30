import "@/styles/globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({ weight: ["400","500","600","700"], subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={ibm.className}>
      <Component {...pageProps} />
    </main>
  );
}
