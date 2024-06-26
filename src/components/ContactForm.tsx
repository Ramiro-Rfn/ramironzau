import { Button, Flex, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { useForm as useFormpree } from "@formspree/react";
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';


type FormInputs = {
    name: string;
    email: string;
    message: string;
}

import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("Email obrigatório").email("Email não valido!"),
  message: yup.string().min(20, "Mínimo 20 caracteres!").required()
}).required();



export function ContactForm() {
    const [serverState, sendToFormspree] = useFormpree("mvoeoolo");
    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    function handleSubmitForm(data: FormInputs) {
        sendToFormspree(data)

        reset({name: "", email: "", message: ""}, {keepSubmitCount: false, keepIsSubmitted: false})

        if(serverState.succeeded) {
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    


    return (
        <Flex align='center' maxW={['100%', '90%', '80%', '80%' ]} margin={['0 auto', '0 auto']} flexDir={['column', 'column', 'column', 'row']} justify='space-between'>
            <Text fontSize='1.5rem' mb={['2rem', '2rem', '2rem', '0']} maxW={[500, 500, 500, 400]} color='gray.50'>Posso ajuda-lo com o seu problema? Mande-me uma mensagem</Text>
            
            <Flex flex='1' as='form' w={['100%', '100%', '100%', 'auto']} onSubmit={handleSubmit(handleSubmitForm)} flexDir='column'>
                <Stack w='100%' mb='4' spacing='4'>
                    <Input size='lg' color='gray.50' {...register('name')} focusBorderColor='pink.500' placeholder="Nome"/>
                    <Input size='lg' color='gray.50' {...register('email')} focusBorderColor='pink.500' placeholder="Email"/>
                    <Textarea color='gray.50' {...register('message')} focusBorderColor='pink.500' placeholder="Messagem"/>
                </Stack>

                <Button isLoading={isSubmitting} colorScheme='pink' size='lg' w={['100%', '100%', '100%', '8rem']} type="submit">Enviar</Button>
            </Flex>

            <ToastContainer/>
        </Flex>
    )
}