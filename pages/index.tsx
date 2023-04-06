import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push("/tickets/1");
  }, []);
}
