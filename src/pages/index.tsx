import { Box, CircularProgress, CircularProgressLabel, Flex, Image, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
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
  projects: Project[]
  skills: Skills[]
}

export default function Home({ projects, skills }: HomeProps) {

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

          <Box maxW={1190} w='100%'   margin='8rem auto 0'>
              <Text as='h2' textAlign='center' mb='3rem' fontSize='3rem' color='gray.50'>Sobre</Text>

              <Flex>
                <Flex maxW={617} flexDir='column' >
                  <Text fontSize='1rem' color='gray.50' mb='4'>Sobre Me</Text>
                  <Text fontSize='1.5rem' color='gray.100' fontWeight='400'>An inquisitive Computer Science 
                    Engineering student, skilled in leadership, 
                    seeking to leverage solid development skills with focus on collaboration, 
                    communication and passion.
                  </Text>
                </Flex>

                <Flex flex='1' flexDir='column' mt='4rem' ml='4rem'>
                  <Box mb='8'>
                    <Text fontSize='1rem' color='gray.50' mb='4'>Experiência</Text>
                    
                    <Flex>
                      <Flex w='100%' flexDir='column' borderBottom='1px solid gray' py='2'>
                        <Flex align='center' justify='space-between'>
                          <Text fontSize='1.25rem' color='gray.50' mb='2'>Junior Front-end developer</Text>
                          
                          <Text 
                            as='span' p='2' 
                            borderRadius='full'  
                            fontSize='0.6rem' 
                            bg='pink.200' 
                            color='pink.500'
                          >
                            Remoto
                          </Text>
                        </Flex>

                        <Flex align='center' justify='space-between'>
                          <Text color='gray.100'>Click (Start Brasileira)</Text>
                          <Text color='gray.100'>Dez 2021 - Mar 2022</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>

                  <Box>
                    <Text fontSize='1rem' color='gray.50' mb='4'>Formação</Text>
                    
                    <Flex>
                      <Flex w='100%' flexDir='column' borderBottom='1px solid gray' py='2'>
                        <Flex align='center' justify='space-between'>
                          <Text fontSize='1.25rem' color='gray.50' mb='2'>Engenharia Informática de Gestão</Text>
                        </Flex>

                        <Flex align='center' justify='space-between'>
                          <Text color='gray.100'>ISP Jeans Piaget</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
          </Box>

          <Box maxW={990} w='100%'   margin='8rem auto 0'>
              <Text as='h2' textAlign='center' mb='1rem' fontSize='3rem' color='gray.50'>Skills</Text>
              <Text textAlign='center' fontWeight='400' mb='6rem' fontSize='2rem' color='gray.100'>Tecnologias com as quais tenho trabalhado recentemete</Text>

              <Box display='grid' rowGap='9' gridTemplateColumns='1fr 1fr 1fr 1fr 1fr'>
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

          <Box maxW={990} w='100%'   margin='8rem auto 8rem'>
              <Text as='h2' textAlign='center' mb='3rem' fontSize='3rem' color='gray.50'>Projectos</Text>

              <Box display='grid' gap='8' gridTemplateColumns='1fr 1fr 1fr'>
                {projects.map((project)=>{
                  return (
                    <Card key={project.id} data={project}/>
                  )
                })}
              </Box>
          </Box>

          <Box py='4rem' maxW={990} margin='0 auto'>
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
      previewLink: data.data.previewlink.url

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

  console.log(projects, skills)
  return {
    props: {
      projects,
      skills
    },
  }
}