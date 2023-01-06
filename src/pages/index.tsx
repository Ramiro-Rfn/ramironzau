import { Box, CircularProgress, CircularProgressLabel, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Card } from "../components/Card";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { settings } from "../config/react-slick";
import { createClient } from "../services/prismic";

type Project = {
  id: string,
  image: string,
  title: string,
  description: string,
  stack: string,
  codeLink: string,
  previewLink: string
}

type Skills = {
  id: string,
  icon: string,
  skillName: string,
  skillStatus: number
}

interface HomeProps {
  projects: Project[];
  skills: Skills[];
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
  }
}

export default function Home({ aboutMe, projects, skills }: HomeProps) {
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
          <Flex maxW={[800, 800, 900, 1190]} align='center' px={['1rem', '2rem', '2rem', '0']} justify='space-between' pt={['4rem','8rem']} w='100%'  margin={['0 auto']}>
            <Flex maxW={639} direction='column'>
              <Text as='h1' fontSize={['2.5rem', '2rem', '3rem', '3.5rem']} color='gray.50'>
                Hi 👋,
                <Text>My name is</Text>
                <Text bgGradient='linear(to-r, #00C0FD, #E70FAA)' bgClip='text'>Ramiro Nzau</Text>
              </Text>


              <Text color='gray.100' fontSize={['1rem', '1rem', '1.5rem','2rem']}>
                Desenvolvedor front-end junior
              </Text>
            </Flex>

            {!isWideVersion && (
              <Flex >
                <Flex w={[300, 200, 280,349]} h={[200, 200, 280,349]} p='2' overflow='hidden' bgGradient='linear(to-r, #00C0FD, #E70FAA)' borderRadius='50%'>
                  <Image width='100%' height='100%' borderRadius='50%' src="images/ramiro.png" alt="" />
                </Flex>
              </Flex>
            )}

          </Flex>


          <Box maxW={[800, 800, 900, 1190]} w='100%' px={['1rem', '2rem', '2rem', '0']}  margin={['4rem 0 0','8rem auto 0']} id="skills">
              <Text as='h2' textAlign='center' mb='1rem' fontSize={['2rem','3rem']} color='gray.50'>Skills</Text>
              <Text textAlign='center' fontWeight='400' mb={['3rem','6rem']} fontSize={['1rem','2rem']} color='gray.100'>Tecnologias com as quais tenho trabalhado recentemete</Text>

                {!isWideVersion?(
                  <Box display='grid' rowGap='3rem' gridTemplateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr']}> 
                    {skills.map((skill)=>{
                      return (
                          <Flex key={skill.id} align='center' direction='column'>
                            <CircularProgress size={['80px','120px']}  value={skill.skillStatus} color='pink.500' >
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
                ): (
                  <Slider
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll= {1} 
                    
                    arrows={false}
                    dotsClass=''
                  >
                    {skills.map((skill)=>{
                      return (
                        (
                          <Flex display='flex!important' key={skill.id} align='center' direction='column'>
                            <CircularProgress size={['80px','120px']}  value={skill.skillStatus} color='pink.500' >
                              <CircularProgressLabel color='gray.100'>{skill.skillStatus}%</CircularProgressLabel>
                            </CircularProgress>
      
                            <Flex mt='4' justify='center'>
                              <Text color='gray.50'>{skill.skillName}</Text>
                            </Flex>
                          </Flex>
                      ))
                    })}
                  </Slider>
                )}
          </Box>

          <Box maxW={[800, 800, 900, 1190]} w='100%' px={['2rem', '2rem', '2rem', '0']}  margin={[ '4rem 0 4rem', '8rem auto 8rem']} id="projects">
              <Text as='h2' textAlign='center' mb='1rem' fontSize={['2rem','3rem']} color='gray.50'>Projectos</Text>
              <Text textAlign='center' fontWeight='400' mb={['3rem','6rem']} fontSize={['1rem', '2rem']} color='gray.100'>Coisa que tenho construido ultimamente</Text>

              <Slider {...settings}>
                {projects.map((project)=>{
                  return (
                    <Card key={project.id} data={project}/>
                  )
                })}
              </Slider>
          </Box>

          <Box py={['2rem','4rem']} px={['1rem', '2rem', '2rem', '0']}  maxW={[800, 800, 900, 1190]} margin={['0 1rem','0 auto']} id="contact">
            <Text as='h2' textAlign='center' mb={['1.5rem','3rem']} fontSize={['2rem','3rem']} color='gray.50'>Contacto</Text>

            <ContactForm/>
          </Box>

        </Box>    
      </Flex>

      <Footer/>
    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  
  const response = await client.getAllByType('projects');

  const projects = response?.map((data)=>{
    return {
      id: data.id,
      image: data.data.image.url,
      title: data.data.title,
      description: data.data.description,
      stack: data.data.stack,
      codeLink: data.data.codelink.url,
      previewLink: data.data.previewlink.url? data.data.previewlink.url: '' 

    }
  })

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

  console.log(aboutMe)

  return {
    props: {
      projects,
      skills,
      aboutMe
    },
  }
}