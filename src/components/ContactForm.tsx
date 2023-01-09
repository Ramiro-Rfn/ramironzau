import { Button, Flex, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from "../services/api";

type FormInputs = {
    name: string;
    email: string;
    message: string;
}

export function ContactForm() {
    const { register, handleSubmit, formState: {isSubmitting} } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        await api.post('/contact', data);
    }

    return (
        <Flex align='center' maxW={['100%', '90%', '80%', '80%' ]} margin={['0 auto', '0 auto']} flexDir={['column', 'column', 'column', 'row']} justify='space-between'>
            <Text fontSize='1.5rem' mb={['2rem', '2rem', '2rem', '0']} maxW={[500, 500, 500, 400]} color='gray.50'>Posso ajuda-lo com o seu problema? Mande-me uma mensagem</Text>
            
            <Flex flex='1' as='form' w={['100%', '100%', '100%', 'auto']} onSubmit={handleSubmit(onSubmit)} flexDir='column'>
                <Stack w='100%' mb='4' spacing='4'>
                    <Input size='lg' color='gray.50' {...register('name')} focusBorderColor='pink.500' placeholder="Nome"/>
                    <Input size='lg' color='gray.50' {...register('email')} focusBorderColor='pink.500' placeholder="Email"/>
                    <Textarea color='gray.50' {...register('message')} focusBorderColor='pink.500' placeholder="Messagem"/>
                </Stack>

                <Button isLoading={isSubmitting} colorScheme='pink' size='lg' w={['100%', '100%', '100%', '8rem']} type="submit">Enviar</Button>
            </Flex>
        </Flex>
    )
}