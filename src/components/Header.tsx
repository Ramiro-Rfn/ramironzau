import { Box, Flex, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi';
export function Header() {
    return (
        <Flex w='100%' as='header'>
            <Flex maxW={1190} align='center' justify='space-between' w='100%' margin='0 auto' p='8'>
                <Text 
                    bgGradient='linear(to-l, #7928CA, #FF0080)' 
                    bgClip='text' 
                    fontSize='3xl'
                >
                    RFN
                </Text>

                <Flex as='nav'>
                    <Stack spacing='8' direction='row' as='ul'>
                        <Box as="li" >
                            <Link  
                                color='gray.100' 
                                fontSize='1.25rem' 
                                fontWeight='500'
                                _hover={{bgClip:'text',  bgGradient: 'linear(to-l, #7928CA, #FF0080)' }}
                            >Sobre</Link>
                        </Box>

                        <Box>
                            <Link 
                                color='gray.100' 
                                fontSize='1.25rem' 
                                fontWeight='500'
                                _hover={{bgClip:'text',  bgGradient: 'linear(to-l, #7928CA, #FF0080)' }}
                            >Skills</Link>
                        </Box>

                        <Box>
                            <Link 
                                color='gray.100' 
                                fontSize='1.25rem' 
                                fontWeight='500'
                                _hover={{bgClip:'text',  bgGradient: 'linear(to-l, #7928CA, #FF0080)' }}
                            >Trabalhos</Link>
                        </Box>

                        <Box>
                            <Link 
                                color='gray.100' 
                                fontSize='1.25rem' 
                                fontWeight='500'
                                _hover={{bgClip:'text',  bgGradient: 'linear(to-l, #7928CA, #FF0080)' }}
                            >Contacto</Link>
                        </Box>
                    </Stack>

                    <HStack ml='8'>
                        <Flex align='center' justify='center' w='8' h='8' borderRadius={16} bg='gray.200'>
                            <Link display='flex' alignItems='center' justifyContent='center'>
                                <Icon _hover={{color: 'pink.500'}} as={FiGithub}/>
                            </Link>
                        </Flex>

                        <Flex align='center' justify='center' w='8' h='8' borderRadius={16} bg='gray.200'>
                            <Link display='flex' alignItems='center' justifyContent='center'>
                                <Icon _hover={{color: 'pink.500'}} as={FiLinkedin}/>
                            </Link>
                        </Flex>


                        <Flex align='center' justify='center' w='8' h='8' borderRadius={16} bg='gray.200'>
                            <Link display='flex' alignItems='center' justifyContent='center'>
                                <Icon _hover={{color: 'pink.500'}} as={FiFacebook}/>
                            </Link>
                        </Flex>
                    </HStack>
                </Flex>
            </Flex>
        </Flex>
    )
}