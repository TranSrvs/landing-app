import "@/assets/css/globals.css";
import type { AppProps } from "next/app";
import "@/domain/usecases/i18n";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
