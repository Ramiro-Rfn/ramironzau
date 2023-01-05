import { Box, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createClient } from "../services/prismic";

type Education = {
    id: string;
    course: string;
    school: string;
    start: Date;
    end: Date;
}

type WorkExperience = {
    id: string;
    role: string;
    organization: string;
    start: Date;
    end: Date;
    type: string;
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

  educations: Education[];
  workExperiences: WorkExperience[]; 
}

export default function About({ aboutMe, educations, workExperiences }: AboutProps) {

    console.log(educations)
    console.log(workExperiences)
  
  return (
    <>
      <Head>Home | Ramiro Nzau </Head>
      
      <Flex w='100%' direction='column'>
        <Header socialMedia={aboutMe.socialmedia}/>

        <Box w='100%'>
            <Flex maxW={1190} align='center' justify='space-between' w='100%'  margin='0 auto 4rem' >
                <Box maxW={1190} w='100%'   margin='6rem auto 0' id="about">
                    <Flex w='100%'>
                        <Flex maxW={617} flexDir='column' >
                            <Text fontSize='2.5rem' color='gray.50' mb='4' >Sobre Me</Text>
                            <Text fontSize='1.5rem' color='gray.100' fontWeight='400'>
                                {aboutMe.aboutme}
                            </Text>
                        </Flex>

                        <Flex flex='1' flexDir='column' mt='4rem' ml='4rem'>
                            <Box mb='8'>
                                <Text fontSize='2.5rem' color='gray.50' mb='4'>Experiência</Text>
                                
                                <Flex>
                                    {workExperiences?.map((workExperience)=> {
                                        return(
                                            <Flex key={workExperience.id} w='100%' flexDir='column' borderBottom='1px solid gray' py='2'>
                                                <Flex align='center' justify='space-between'>
                                                    <Text fontSize='1.25rem' color='gray.50' mb='2'>{workExperience.role}</Text>
                                                    
                                                    <Text 
                                                    as='span' p='2' 
                                                    borderRadius='full'  
                                                    fontSize='0.6rem' 
                                                    bg='pink.200' 
                                                    color='pink.500'
                                                    >
                                                        {workExperience.type}
                                                    </Text>
                                                </Flex>
            
                                                <Flex align='center' justify='space-between'>
                                                    <Text color='gray.100'>{workExperience.organization}</Text>
                                                    <Text color='gray.100' textTransform='capitalize'>
                                                        {`${workExperience.start} - ${workExperience.end}`}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        )
                                    })}
                                </Flex>
                            </Box>

                            <Box>
                                <Text fontSize='2.5rem' color='gray.50' mb='4'>Formação</Text>
                                
                                <Flex>
                                    <Flex w='100%' flexDir='column' py='2'>
                                        {educations?.map((education)=> {
                                            return(
                                                <Flex key={education.id} w='100%' flexDir='column' borderBottom='1px solid gray' py='2'>
                                                    <Flex align='center' justify='space-between'>
                                                        <Text fontSize='1.25rem' color='gray.50' mb='2'>{education.course}</Text>
                                                    </Flex>
                
                                                    <Flex align='center' justify='space-between'>
                                                        <Text color='gray.100'>{education.school}</Text>
                                                        <Text color='gray.100' textTransform='capitalize'>
                                                            {`${education.start} - ${education.end}`}
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            )
                                        })}
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
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


  const educationResponse = await client.getAllByType('education');
  
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
    email: aboutMeResult.data.email
  }

  console.log(workExperienceResponse)

  return {
    props: {
      aboutMe,
      educations,
      workExperiences
    },
  }
}