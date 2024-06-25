import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SkillsCircle } from "./SkillsCircle";

type Skills = {
    id: string,
    icon: string,
    skillName: string,
    skillStatus: number
}

interface SkillsSectionProps {
    skills: Skills[]
}

export function SkillsSection( {skills}: SkillsSectionProps) {
    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    })

    return (
        <Box as="section" maxW={[800, 800, 900, 1190]} w='100%' px={['1rem', '2rem', '2rem', '2rem', 0]}  margin={['4rem 0 0','8rem auto 0']} id="skills">
            <Text as='h2' textAlign='center' mb='1rem' fontSize={['2rem','3rem']} color='gray.50'>Skills</Text>
            <Text textAlign='center' fontWeight='400' mb={['3rem','6rem']} fontSize={['1rem','2rem']} color='gray.100'>Tecnologias com as quais tenho trabalhado recentemete</Text>

            {!isWideVersion?(
                <Box display='grid' rowGap='3rem' gridTemplateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr 1fr 1fr']}> 
                {skills.map((skill)=>{
                    return (
                        <SkillsCircle skill={skill}/>
                )})}
                </Box> 
            ): (
                <Slider
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll= {1} 
                    autoplay
                    arrows={false}
                    dotsClass=''
                >
                {skills.map((skill)=>{
                    return (
                        <SkillsCircle key={skill.id} skill={skill}/>
                    )
                })}
                </Slider>
            )}
        </Box>
    )
}