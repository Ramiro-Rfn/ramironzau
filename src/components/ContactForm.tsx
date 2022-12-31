import { Button, Flex, Input, Stack, Text, Textarea } from "@chakra-ui/react";

export function ContactForm() {
    return (
        <Flex align='center' justify='space-between'>
            <Text fontSize='1.75rem' maxW={500} color='gray.50'>Posso ajuda-lo com o seu problema? Mande-me uma mensagem</Text>
            <Flex flex='1' as='form' flexDir='column'>
                <Stack w='100%' mb='4' spacing='4'>
                    <Input color='gray.50' focusBorderColor='pink.500' placeholder="Nome"/>
                    <Input color='gray.50' focusBorderColor='pink.500' placeholder="Email"/>
                    <Textarea color='gray.50' focusBorderColor='pink.500' placeholder="Messagem"/>
                </Stack>

                <Button colorScheme='pink' w='8rem'>Enviar</Button>
            </Flex>
        </Flex>
    )
}