import { Button, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { createClient } from "../services/prismic";

interface Custom404Props {
    aboutMe: {
      name: string,
      avatar: string,
      aboutme: string,
      socialmedia: {
        facebook: string,
        linkedIn: string,
        github: string,
      },
      phonenumber: string,
      whatsappnumber: string,
      email: string
    }
  }
  

export default function Custom404( { aboutMe }:Custom404Props) {
    return(
        <>
            <Head>Ramiro Nzau - 404 Not Found</Head>

            <Flex h='100vh' w='100%'  direction='column'>
                <Header socialMedia={aboutMe.socialmedia}/>

                <Flex w='100%' align='center' flexDir='column' justify='center'>
            
                    <Text fontSize={['4rem','12rem']} bgGradient='linear(to-r, #00C0FD, #E70FAA)' bgClip='text'>
                        404
                    </Text>

                    <Text fontSize='1.5rem'  mb='2rem' bgGradient='linear(to-r, #00C0FD, #E70FAA)' bgClip='text'>
                        Página não encontrada
                    </Text>

                    <Link href='/'>
                        <ChakraLink >
                            <Button size='lg' colorScheme='pink'>
                                Voltar para Home
                            </Button>
                        </ChakraLink>
                    </Link>
                </Flex>
            </Flex>
        </>
        
    )    
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData })
  
    const aboutMeResult = await client.getSingle('about_me');
    
    const aboutMe = {
      aboutme: aboutMeResult.data.aboutme,
      socialmedia: {
        facebook: aboutMeResult.data.socialmedia[0].facebook.url,
        linkedIn: aboutMeResult.data.socialmedia[0].linkedin.url,
        github: aboutMeResult.data.socialmedia[0].github.url,
      },
      phonenumber: aboutMeResult.data.phonenumber,
      whatsappnumber: aboutMeResult.data.whatsappnumber,
      email: aboutMeResult.data.email
    }

    return {
      props: {
        aboutMe
      },

      revalidate: 60 * 60 * 24 // 24 horas,
    }
  }