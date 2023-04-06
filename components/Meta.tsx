import Head from "next/head";
import React from "react";

export const Meta = ({ title = "Swaypay Assignment" }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
  );
};
