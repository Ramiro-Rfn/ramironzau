import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Card } from "../components/Projects/Card";

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

interface ProjectsProps {
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

  projects: Project[];
}

export default function Projects({ aboutMe, projects }: ProjectsProps) {
  
  return (
    <>
      <Head>Home | Ramiro Nzau </Head>
      
      <Flex w='100%' direction='column'>
        <Header socialMedia={aboutMe.socialmedia}/>

        <Box w='100%'>
            <Flex maxW={1190} align='center' justify='space-between' w='100%'  margin='0 auto 4rem' >
                
                <Box maxW={[800, 800, 900, 1190]} w='100%' px={['1rem', '2rem', '2rem', '2rem']}  margin={['4rem 0 0','8rem auto 0']} id="projects">
                    <Text as='h2' mb='1rem' fontSize={['2rem','3rem']} color='gray.50'>Projectos</Text>
                    <Text fontWeight='400' mb={['3rem','6rem']} fontSize={['1rem','2rem']} color='gray.100'>Coisa que tenho construido ultimamente</Text>

                    <Grid maxW={[800, 800, 700, 1190]} gap='2rem' margin='0 auto' gridTemplateColumns={['1fr', '1fr', '1fr 1fr','1fr 1fr 1fr']}>
                        {projects.map((project)=>{
                          return (
                              <Card key={project.id} data={project}/>
                          )
                        })}
                    </Grid>
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
      projects
    },

    revalidate: 60 * 60 * 24 // 24 horas,
  }
}