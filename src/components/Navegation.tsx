import { Box, Link as ChakraLink, Stack } from "@chakra-ui/react";
import Link from "next/link";

export function Navigation() {
    return (
        <Stack spacing='8' direction={['column', 'column', 'row']} as='ul'>
            <Box as="li" >
                <Link href='/'>
                    <ChakraLink  
                        color='gray.100' 
                        fontSize='1.25rem' 
                        fontWeight='500'
                        _hover={{bgClip:'text',  bgGradient: 'linear(to-r, #00C0FD, #E70FAA)' }}
                    >Home</ChakraLink>
                </Link>
            </Box>

            <Box as="li" >
                <Link href='#about'>
                    <ChakraLink  
                        color='gray.100' 
                        fontSize='1.25rem' 
                        fontWeight='500'
                        _hover={{bgClip:'text',  bgGradient: 'linear(to-r, #00C0FD, #E70FAA)' }}
                    >Sobre</ChakraLink>
                </Link>
            </Box>

            <Box>
                <Link href='/skills'>
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
    )
}