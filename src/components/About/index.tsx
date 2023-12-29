import { Box, Flex, Text } from "@chakra-ui/react";


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
    <>      
      <Flex w='100%' direction='column'>
        <Box w='100%'>
            <Flex maxW={1190} align='center' justify='space-between' w='100%'  margin='0 auto 4rem' >
                <Box maxW={1190} w='100%'   margin={['3rem 0 0','6rem auto 0']} px={['1rem', '2rem', '2rem', '2rem', '0']} id="about">
                    <Flex w='100%' flexDir={['column', 'column', 'column', 'row']}>
                        <Flex maxW={[500, 500, 500, 500, 617]} flexDir='column' >
                            <Text fontSize='2.5rem' color='gray.50' mb='4' >Sobre Me</Text>
                            <Text fontSize={['1rem','1.5rem']} color='gray.100' fontWeight='400'>
                                {aboutMe.aboutme}
                            </Text>
                        </Flex>

                        <Flex maxW={617} flex='1' flexDir='column' mt='4rem' ml={['0', 0, 0, '4rem']}>
                            <Box mb={['8']}>
                                <Text fontSize={['2rem','2.5rem']} color='gray.50' mb={['2','4']}>Experiência</Text>
                                
                                <Flex>
                                    {workExperiences?.map((workExperience)=> {
                                        return(
                                            <Flex key={workExperience.id} w='100%' flexDir='column' borderBottom='1px solid gray' py='2'>
                                                <Flex align='center' justify='space-between'>
                                                    <Text fontSize='1.25rem' color='gray.50' mb='2' noOfLines={1}>{workExperience.role}</Text>
                                                    
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
            
                                                <Flex align={['start','center']} justify='space-between' flexDir={['column', 'row']}>
                                                    <Text color='gray.100' noOfLines={1}>{workExperience.organization}</Text>
                                                    <Text color='gray.100' noOfLines={1} textTransform='capitalize'>
                                                        {`${workExperience.start} - ${workExperience.end}`}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        )
                                    })}
                                </Flex>
                            </Box>

                            <Box>
                                <Text fontSize={['2rem', '2.5rem']} color='gray.50' mb={['2','4']}>Formação</Text>
                                
                                <Flex>
                                    <Flex w='100%' flexDir='column' py='2'>
                                        {educations?.map((education)=> {
                                            return(
                                                <Flex key={education.id} w='100%' flexDir='column' borderBottom='1px solid gray' py='2'>
                                                    <Flex align='center' justify='space-between'>
                                                        <Text fontSize='1.25rem' color='gray.50' mb='2'>{education.course}</Text>
                                                    </Flex>
                
                                                    <Flex align={['start','center']} justify='space-between' flexDir={['column', 'row']}>
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
      </Flex>
    </>
  )
}
