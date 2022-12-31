import { Card as ChakraCard, CardBody, Flex, Heading, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FiGithub, FiLink } from "react-icons/fi";

export function Card() {
    return (
        <ChakraCard maxW='sm' bg='gray.700'>
            <CardBody p='0'>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='8px 8px 0 0'
                />
                <Stack p='4' spacing='3'>
                    <Heading fontWeight='500' fontSize='1.75rem' color='gray.50' size='md'>Revisar</Heading>
                    <Text fontSize='1.125rem' color='gray.100'>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    </Text>
                    <Text color='gray.50' fontSize='1rem'>
                    Stack: <Text as='span' color='gray.100'>Html, Css, Typescript</Text>
                    </Text>

                    <Flex align='center' mt='6' justify='space-between'>
                    <Flex align='center'>
                        <Icon as={FiLink} color='white'/>



                        <Link ml='2' color='white'>Preview</Link>
                    </Flex>

                    <Flex align='center'>
                        <Icon as={FiGithub} color='white'/>



                        <Link ml='2' color='white'>Ver código</Link>
                    </Flex>
                    </Flex>
                </Stack>

            
            </CardBody>
        </ChakraCard>
    )   
}