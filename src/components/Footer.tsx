import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

export function Footer() {
    return (
        <Flex p='8' flexDir='column' align='center'>
            <Text color='gray.100' mb='4'>Ramiro_Rfn</Text>

            <HStack mb='4'>
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

            <Text color='gray.100'>+244 941278597</Text>
            <Text color='gray.100'>ramirofrancisco962014@gmail.com</Text>
        </Flex>
    )
}