import { Card as ChakraCard, CardBody, Flex, Heading, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FiGithub, FiLink } from "react-icons/fi";

type Project = {
    id: string,
    image: string,
    title: string,
    description: string,
    stack: string,
    codeLink: string,
    previewLink: string
}
  
interface CardProps {
    data: Project    
}

export function Card({ data }: CardProps) {
    return (
        <ChakraCard maxW={370} h='30rem' bg='gray.700'>
            <CardBody p='0' h='100%'>
                <Image
                    src={data.image}
                    alt=''
                    borderRadius='8px 8px 0 0'
                />
                <Flex p='4' justify='space-between' h='57%' flex='1' flexDir='column'>
                    <Stack spacing='3'>
                        <Heading fontWeight='500' fontSize='1.75rem' color='gray.50' size='md'>{data.title}</Heading>
                        <Text noOfLines={4} fontSize='1.125rem' color='gray.100'>{data.description}</Text>
                        <Text noOfLines={1} color='gray.50' fontSize='1rem'>Stack: <Text as='span' color='gray.100'>{data.stack}.</Text>
                        </Text>
                    </Stack>
                    <Flex align='center' mt='6' justify='space-between'>
                        <Flex align='center'>
                            <Icon as={FiLink} color='white'/>

                            <Link ml='2' color='white' href={data.previewLink? data.previewLink: ''}>Preview</Link>
                        </Flex>

                        <Flex align='center'>
                            <Icon as={FiGithub} color='white'/>

                            <Link ml='2' color='white' href={data.codeLink}>Ver código</Link>
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
        </ChakraCard>
    )   
}