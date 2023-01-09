import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, Link as ChakraLink, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { FiFacebook, FiGithub, FiLinkedin, FiMenu } from 'react-icons/fi';
import { Navigation } from "./Navegation";

interface HomeProps {
    socialMedia: {
        facebook: string,
        linkedIn: string,
        github: string,
    }
}

export function Header({ socialMedia }: HomeProps) {
    const {isOpen , onClose, onOpen} = useDisclosure();

    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    })

    console.log(isWideVersion);

    return (
        <Flex w='100%' as='header'>
            <Flex maxW={1190} align='center' px={['1rem', '1rem', '2rem', '2rem']} justify='space-between' w='100%' margin={['0 1rem','0 auto']} py='8'>
                <Link href='/'>
                    <ChakraLink 
                        bgGradient='linear(to-r, #00C0FD, #E70FAA)' 
                        bgClip='text' 
                        fontSize={['2xl','3xl']}
                    >
                        {`<RFN/>`}
                    </ChakraLink>
                </Link>

                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay>
                        <DrawerContent bg='gray.800' p='4'>
                            <DrawerCloseButton mt='6' color='gray.50'/>
                            <DrawerHeader color='gray.50'>Navegação</DrawerHeader>
    
                            <DrawerBody>
                                <Navigation/>

                                <HStack mt='4rem' w='100%' justify='center'>
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
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>

                {
                    isWideVersion ? (
                        <Button bg="transparent"  onClick={onOpen}>
                            <Icon as={FiMenu} color="gray.50" boxSize={8}/>
                        </Button>
                    ):(
                

                    <Flex as='nav'>
                        <Navigation/>

                        <HStack ml='8' display={{md: 'none'}}>
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
                )}
            </Flex>
        </Flex>
    )
}