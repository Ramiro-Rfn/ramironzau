import { Box, CircularProgress, CircularProgressLabel, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createClient } from "../services/prismic";

type Skills = {
    id: string,
    icon: string,
    skillName: string,
    skillStatus: number
}

interface AboutProps {
  aboutMe: {
    aboutme: string,
    socialmedia: {
      facebook: string,
      linkedIn: string,
      github: string,
    },
    phonenumber: string,
    whatsappnumber: string,
    email: string
  };

  skills: Skills[];
}
 
export default function About({ aboutMe, skills }: AboutProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false
  })

  
  return (
    <>
      <Head>Home | Ramiro Nzau </Head>
      
      <Flex w='100%' direction='column'>
        <Header socialMedia={aboutMe.socialmedia}/>

        <Box w='100%'>
            <Flex maxW={1190} align='center' justify='space-between' w='100%'  margin='0 auto 4rem' >
                
            <Box maxW={[800, 800, 900, 1190]} w='100%' px={['1rem', '2rem', '2rem', '2rem', 0]}  margin={['4rem 0 0','8rem auto 0']} id="skills">
              <Text as='h2' mb='1rem' fontSize={['2rem','3rem']} color='gray.50'>Skills</Text>
              <Text  fontWeight='400' mb={['3rem','6rem']} fontSize={['1rem','2rem']} color='gray.100'>Tecnologias com as quais tenho trabalhado recentemete</Text>

              <Box 
                display='grid' 
                rowGap='3rem' 
                gridTemplateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr']}> 
                  {skills.map((skill)=>{
                    return (
                        <Flex key={skill.id} align='center' direction='column'>
                          <CircularProgress size={isWideVersion ? '80px':'120px'}  value={skill.skillStatus} color='pink.500' >
                            <CircularProgressLabel color='gray.100'>{skill.skillStatus}%</CircularProgressLabel>
                          </CircularProgress>

                          <Flex mt='4' align='center'>
                            {!isWideVersion && (
                              <Image  src={skill.icon} width={8}/>
                            )}
                            <Text ml='2' color='gray.50'>{skill.skillName}</Text>
                          </Flex>


                        </Flex>
                  )})}
              </Box>
          </Box>
            </Flex>
        </Box>    
        <Footer/>
      </Flex>

    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const skillsResponse = await client.getAllByType('skills');
  
  const skills = skillsResponse?.map((data)=>{
    return {
      id: data.id,
      icon: data.data.icon.url,
      skillName: data.data.skillname,
      skillStatus: data.data.skillstatus
    }
  })

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
      aboutMe,
      skills
    },
  }
}