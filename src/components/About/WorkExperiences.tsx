import { Box, Flex, Text } from "@chakra-ui/react";

type WorkExperience = {
    id: string;
    role: string;
    organization: string;
    start: Date;
    end: Date;
    type: string;
}

interface WorkExperiencesProps {
    workExperiences: WorkExperience[]
}

export function WorkExperiences({ workExperiences }: WorkExperiencesProps) {
    return (
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
    )
}