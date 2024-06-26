import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { About } from "../components/About";
import { BackgroundLines } from "../components/BackGroundLines";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectsSection } from "../components/Projects";
import { SkillsSection } from "../components/Skills";
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

type Educations = {
  id: string,
  course: string,
  school: string,
  start: Date
  end: Date
}

type WorkExperieces = {
  id: string,
  role: string,
  organization: string,
  start: Date
  end: Date
  type: string
}

interface HomeProps {
  projects: Project[];
  skills: Skills[];
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
  },
  educations: Educations[],
  workExperiences: WorkExperieces[]
}

export default function Home({ aboutMe, educations, workExperiences, projects, skills }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false
  })

  return (
    <>
      <Head>
        <title>Portfólio - Ramiro Francisco Nzau</title>
      </Head>
      
      <Flex w='100%' direction='column'>
        <Header socialMedia={aboutMe.socialmedia}/>

        <BackgroundLines />

        <Box as="main" w='100%'>
          <Flex as="section" maxW={[800, 800, 900, 1190]} align='center' px={['1rem', '2rem', '2rem', '2rem', 0]} justify='space-between' pt={['4rem','8rem']} w='100%'  margin={['0 auto']}>
            <Flex maxW={639} direction='column'>
              <Text as='h1' fontSize={['2.5rem', '2rem', '3rem', '3.5rem']} color='gray.50'>
                Hi 👋,
                <Text>My name is</Text>
                <Text bgGradient='linear(to-r, #00C0FD, #E70FAA)' bgClip='text'>{aboutMe.name}</Text>
              </Text>


              <Text color='gray.100' fontSize={['1rem', '1rem', '1.5rem','2rem']}>
                Desenvolvedor front-end junior
              </Text>
            </Flex>

            {!isWideVersion && (
              <Flex >
                <Flex w={[300, 200, 280,349]} h={[200, 200, 280,349]} align="center" justify="center"  p='2' overflow='hidden' bgGradient='linear(to-r, #00C0FD, #E70FAA)' borderRadius='50%'>
                  
                  <Flex width="99%" height="99%" borderRadius="50%" position="relative" overflow="hidden" >
                    <Image width='100%' height='100%'  src={aboutMe.avatar} alt="" />
                  </Flex>
                  
                </Flex>
              </Flex>
            )}

          </Flex>


          <About aboutMe={aboutMe} educations={educations} workExperiences={workExperiences}/>


          <SkillsSection skills={skills}/>

          <ProjectsSection projects={projects}/>

          <Box py={['2rem','4rem']} px={['1rem', '2rem', '2rem', '2rem', 0]}  maxW={[800, 800, 900, 1190]} margin={['0 1rem','0 auto']} id="contact">
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


  const workExperienceResponse = await client.getAllByType('work_experience');
  
  const workExperiences = workExperienceResponse?.map((data)=>{
    return {
      id: data.id,
      role: data.data.role,
      organization: data.data.organization,
      
      start: new Date(data.data.start).toLocaleDateString('pt-br', {
        month: 'short',
        year: 'numeric'
      }) ,

      end: new Date(data.data.end).toLocaleDateString('pt-br', {
        month: 'short',
        year: 'numeric'
      }),

      type: data.data.type
    }
  })


  const educationResponse = await client.getAllByType("education");
  
  const educations = educationResponse?.map((data)=>{
    return {
      id: data.id,
      course: data.data.course,
      school: data.data.school,
      
      start: new Date(data.data.start).toLocaleDateString('pt-br', {
        month: 'short',
        year: 'numeric'
      }) ,

      end: new Date(data.data.end).toLocaleDateString('pt-br', {
        month: 'short',
        year: 'numeric'
      })
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
    email: aboutMeResult.data.email,
    name: aboutMeResult.data.name,
    avatar: aboutMeResult.data.avatar.url
  }

  return {
    props: {
      projects: projects.filter((item, index)=> {if(index < 10) return item ;}),
      skills,
      aboutMe,
      educations,
      workExperiences
    },
    
    revalidate: 60 * 60 * 24 // 24 horas,
  }
}