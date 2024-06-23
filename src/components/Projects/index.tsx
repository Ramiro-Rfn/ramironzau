import { Box, Text } from "@chakra-ui/react";
import { Card } from "./Card";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type Project = {
    id: string,
    image: string,
    title: string,
    description: string,
    stack: string,
    codeLink: string,
    previewLink: string
}

interface ProjectsSectionProps {
    projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <Box maxW={[800, 800, 900, 1190]} w='100%' px={['2rem', '2rem', '2rem', '2rem', 0]}  margin={[ '4rem 0 4rem', '8rem auto 8rem']} id="projects">
            <Text as='h2' textAlign='center' mb='1rem' fontSize={['2rem','3rem']} color='gray.50'>Projectos</Text>
            <Text textAlign='center' fontWeight='400' mb={['3rem','6rem']} fontSize={['1rem', '2rem']} color='gray.100'>Coisa que tenho construido ultimamente</Text>

            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loopMode

                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                }}
            >
                {projects.map((project)=>{
                    return (
                        <SwiperSlide key={project.id} style={{width: 'auto'}}>
                            <Card key={project.id} data={project}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}