import Head from 'next/head';
import React, { useEffect } from "react";
import { MintPage } from "../components";

export default function Home(): JSX.Element {

  // 🔍 Check environment variables when the page loads
  useEffect(() => {
    console.log("🚀 Environment check:");
    console.log("Candy Machine ID:", process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
    console.log("Candy Guard ID:", process.env.NEXT_PUBLIC_CANDY_GUARD_ID);
    console.log("Network:", process.env.NEXT_PUBLIC_SOLANA_NETWORK);
    console.log("RPC URL:", process.env.NEXT_PUBLIC_RPC_URL);
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_PAGE_TITLE}</title>
      </Head> 
      <MintPage 
        cmId={`${process.env.NEXT_PUBLIC_CANDY_MACHINE_ID}`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setNetwork={`${process.env.NEXT_PUBLIC_SOLANA_NETWORK}`}
        rpcUrl={`${process.env.NEXT_PUBLIC_RPC_URL}`}
      >
      </MintPage>
    </>
  );
}
