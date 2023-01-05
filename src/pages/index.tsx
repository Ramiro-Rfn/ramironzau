import { Box, CircularProgress, CircularProgressLabel, Flex, Image, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Card } from "../components/Card";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <Head>Home | Ramiro Nzau </Head>
      
      <Flex w='100%' direction='column'>
        <Header socialMedia={aboutMe.socialmedia}/>

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


          <Box maxW={1190} w='100%'   margin='8rem auto 0' id="skills">
              <Text as='h2' textAlign='center' mb='1rem' fontSize='3rem' color='gray.50'>Skills</Text>
              <Text textAlign='center' fontWeight='400' mb='6rem' fontSize='2rem' color='gray.100'>Tecnologias com as quais tenho trabalhado recentemete</Text>

              <Box display='grid' rowGap='3rem' gridTemplateColumns='1fr 1fr 1fr 1fr 1fr'>
                
                {skills.map((skill)=>{
                  return (
                    <Flex key={skill.id} align='center' direction='column'>
                      <CircularProgress size='120px'  value={skill.skillStatus} color='pink.500' >
                        <CircularProgressLabel color='gray.100'>{skill.skillStatus}%</CircularProgressLabel>
                      </CircularProgress>

                      <Flex mt='4' align='center'>
                        <Image  src={skill.icon} width={8}/>
                        <Text ml='2' color='gray.50'>{skill.skillName}</Text>
                      </Flex>


                    </Flex>
                  )
                })}
              </Box>
          </Box>

          <Box maxW={1190} w='100%'   margin='8rem auto 8rem' id="projects">
              <Text as='h2' textAlign='center' mb='3rem' fontSize='3rem' color='gray.50'>Projectos</Text>
              <Text textAlign='center' fontWeight='400' mb='6rem' fontSize='2rem' color='gray.100'>Coisa que tenho construido ultimamente</Text>

              <Slider {...settings}>
                {projects.map((project)=>{
                  return (
                    <Card key={project.id} data={project}/>
                  )
                })}
              </Slider>
          </Box>

          <Box py='4rem' maxW={990} margin='0 auto' id="contact">
            <Text as='h2' textAlign='center' mb='3rem' fontSize='3rem' color='gray.50'>Contacto</Text>

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