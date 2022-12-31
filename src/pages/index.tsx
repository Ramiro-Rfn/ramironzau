import { Box, CircularProgress, CircularProgressLabel, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export default function Home() {
  return (
    <>
      <Head>Home | Ramiro Nzau </Head>
      
      <Flex w='100%' direction='column'>
        <Header/>

        <Box w='100%'>
          <Flex maxW={1190} align='center' justify='space-between' pt='8rem' w='100%'  margin='0 auto'>
            <Flex maxW={639} direction='column'>
              <Text as='h1' fontSize='3.5rem' color='gray.50'>
                Hi 👋, {`\n`}
                My name is {'\n'}
                <Text bgGradient='linear(to-r, #00C0FD, #E70FAA)' bgClip='text'>Ramiro Francisco Nzau</Text>
              </Text>


              <Text color='gray.100' fontSize='2rem'>
                Desenvolvedor front-end junior
              </Text>
            </Flex>

            <Flex >
              <Flex w={349} h={349} p='2' overflow='hidden' bgGradient='linear(to-r, #00C0FD, #E70FAA)' borderRadius='50%'>
                <Image width='100%' height='100%' borderRadius='50%' src="images/ramiro.png" alt="" />
              </Flex>
            </Flex>

            
          </Flex>

          <Box maxW={990} w='100%'   margin='8rem auto 0'>
              <Text as='h2' textAlign='center' mb='1rem' fontSize='3rem' color='gray.50'>Skills</Text>
              <Text textAlign='center' fontWeight='400' mb='6rem' fontSize='2rem' color='gray.100'>Tecnologias com as quais tenho trabalhado recentemete</Text>

              <Box display='grid' rowGap='9' gridTemplateColumns='1fr 1fr 1fr 1fr 1fr'>
                {[1,2,3,4,5,6,7,8,9,10].map((_, index)=>{
                  return (
                    <Flex key={index} align='center' direction='column'>
                      <CircularProgress size='120px'  value={40} color='pink.500' >
                        <CircularProgressLabel color='gray.100'>40%</CircularProgressLabel>
                      </CircularProgress>

                      <Image mt='4' src="images/logos_bootstrap.svg" w={16} h={16}/>

                    </Flex>
                  )
                })}
              </Box>
          </Box>

          <Box maxW={990} w='100%'   margin='8rem auto 0'>
              <Text as='h2' textAlign='center' mb='3rem' fontSize='3rem' color='gray.50'>Projectos</Text>

              <Box display='grid' gap='8' gridTemplateColumns='1fr 1fr 1fr'>
                {[1,2,3,4,5,6].map((_, index)=>{
                  return (
                    <Card/>
                  )
                })}
              </Box>
          </Box>
        </Box>    
      </Flex>

      <Footer/>
    </>
  )
}
