import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";


export default function Home() {
  return (
    <>
      <Head>Home | Ramiro Nzau </Head>
      
      <Flex h='100vh' direction='column'>
        <Header/>    
      </Flex>
    </>
  )
}
