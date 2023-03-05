import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

interface IApp extends AppProps {
  session: any; // FIX
}

export default function App({ Component, pageProps, session }: IApp) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
