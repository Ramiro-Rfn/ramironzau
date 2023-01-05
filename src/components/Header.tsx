import { Box, Flex, HStack, Icon, Link as ChakraLink, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi';

interface HomeProps {
    socialMedia: {
        facebook: string,
        linkedIn: string,
        github: string,
    }
}

export function Header({ socialMedia }: HomeProps) {
    return (
        <Flex w='100%' as='header'>
            <Flex maxW={1190} align='center' justify='space-between' w='100%' margin='0 auto' py='8'>
                <Link href='/'>
                    <ChakraLink 
                        bgGradient='linear(to-r, #00C0FD, #E70FAA)' 
                        bgClip='text' 
                        fontSize='3xl'
                    >
                        {`<RFN/>`}
                    </ChakraLink>
                </Link>

                <Flex as='nav'>
                    <Stack spacing='8' direction='row' as='ul'>
                        <Box as="li" >
                            <Link href='/about'>
                                <ChakraLink  
                                    color='gray.100' 
                                    fontSize='1.25rem' 
                                    fontWeight='500'
                                    _hover={{bgClip:'text',  bgGradient: 'linear(to-r, #00C0FD, #E70FAA)' }}
                                >Sobre</ChakraLink>
                            </Link>
                        </Box>

                        <Box>
                            <Link href='#skills'>
                                <ChakraLink 
                                    color='gray.100' 
                                    fontSize='1.25rem' 
                                    fontWeight='500'
                                    _hover={{bgClip:'text',  bgGradient: 'linear(to-r, #00C0FD, #E70FAA)' }}
                                >Skills</ChakraLink>
                            </Link>
                        </Box>

                        <Box>
                            <Link href='/projects'>
                                <ChakraLink 
                                    color='gray.100' 
                                    fontSize='1.25rem' 
                                    fontWeight='500'
                                    _hover={{bgClip:'text',  bgGradient: 'linear(to-r, #00C0FD, #E70FAA)' }}
                                >Trabalhos</ChakraLink>
                            </Link>
                        </Box>

                        <Box>
                            <Link href='#contact'>
                                <ChakraLink 
                                    color='gray.100' 
                                    fontSize='1.25rem' 
                                    fontWeight='500'
                                    _hover={{bgClip:'text',  bgGradient: 'linear(to-r, #00C0FD, #E70FAA)' }}
                                >Contacto</ChakraLink>
                            </Link>
                        </Box>
                    </Stack>

                    <HStack ml='8'>
                        <Flex align='center' justify='center' w='8' h='8' borderRadius={16} bg='gray.200'>
                            <Link href={socialMedia.github}>
                                <ChakraLink  display='flex' alignItems='center' justifyContent='center'>
                                    <Icon _hover={{color: 'pink.500'}} as={FiGithub}/>
                                </ChakraLink>
                            </Link>
                        </Flex>

                        <Flex align='center' justify='center' w='8' h='8' borderRadius={16} bg='gray.200'>
                            <Link href={socialMedia.linkedIn}>    
                                <ChakraLink display='flex' alignItems='center' justifyContent='center'>
                                    <Icon _hover={{color: 'pink.500'}} as={FiLinkedin}/>
                                </ChakraLink>
                            </Link>
                        </Flex>


                        <Flex align='center' justify='center' w='8' h='8' borderRadius={16} bg='gray.200'>
                            <Link href={socialMedia.facebook}>
                                <ChakraLink display='flex' alignItems='center' justifyContent='center'>
                                    <Icon _hover={{color: 'pink.500'}} as={FiFacebook}/>
                                </ChakraLink>
                            </Link>
                        </Flex>
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    )
}