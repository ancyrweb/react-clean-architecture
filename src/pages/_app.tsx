import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReduxWrapper } from "../components/context/ReduxWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxWrapper>
      <Component {...pageProps} />
    </ReduxWrapper>
  );
}
