import { Box, Flex, Text } from "@chakra-ui/react";

type Education = {
    id: string;
    course: string;
    school: string;
    start: Date;
    end: Date;
}

interface EducationsProps {
    educations: Education[] 
}

export function Educations( { educations }: EducationsProps) {
    return (
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
    )
}