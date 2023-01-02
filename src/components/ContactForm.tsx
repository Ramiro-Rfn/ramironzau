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
        <Flex align='center' justify='space-between'>
            <Text fontSize='1.75rem' maxW={500} color='gray.50'>Posso ajuda-lo com o seu problema? Mande-me uma mensagem</Text>
            <Flex flex='1' as='form' onSubmit={handleSubmit(onSubmit)} flexDir='column'>
                <Stack w='100%' mb='4' spacing='4'>
                    <Input color='gray.50' {...register('name')} focusBorderColor='pink.500' placeholder="Nome"/>
                    <Input color='gray.50' {...register('email')} focusBorderColor='pink.500' placeholder="Email"/>
                    <Textarea color='gray.50' {...register('message')} focusBorderColor='pink.500' placeholder="Messagem"/>
                </Stack>

                <Button isLoading={isSubmitting} colorScheme='pink' w='8rem' type="submit">Enviar</Button>
            </Flex>
        </Flex>
    )
}