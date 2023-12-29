import { Box, Flex, Text } from "@chakra-ui/react";
import { Educations } from "./Educations";
import { WorkExperiences } from "./WorkExperiences";


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
    avatar: string
  };

  educations: Education[];
  workExperiences: WorkExperience[]; 
}

export function About({ aboutMe, educations, workExperiences }: AboutProps) {
  
  return (     
    <Box as="section" id="sobre" w='100%'>
        <Flex maxW={1190} align='center' justify='space-between' w='100%'  margin='0 auto 4rem' >
            <Box maxW={1190} w='100%'   margin={['3rem 0 0','6rem auto 0']} px={['1rem', '2rem', '2rem', '2rem', '0']}>
                <Flex w='100%' flexDir={['column', 'column', 'column', 'row']}>
                    <Flex maxW={[500, 500, 500, 500, 617]} flexDir='column' >
                        <Text fontSize='2.5rem' color='gray.50' mb='4' >Sobre Me</Text>
                        <Text fontSize={['1rem','1.5rem']} color='gray.100' fontWeight='400'>
                            {aboutMe.aboutme}
                        </Text>
                    </Flex>

                    <Flex maxW={617} flex='1' flexDir='column' mt='4rem' ml={['0', 0, 0, '4rem']}>
                        <WorkExperiences workExperiences={workExperiences}/>

                        <Educations educations={educations}/>  
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </Box>    
  )
}
