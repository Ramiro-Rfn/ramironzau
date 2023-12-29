import { CircularProgress, CircularProgressLabel, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

type Skill = {
    id: string,
    icon: string,
    skillName: string,
    skillStatus: number
}

interface SkillsCircleProps {
    skill: Skill
}


export function SkillsCircle({ skill }: SkillsCircleProps) {
    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    })

    return (
        <Flex key={skill.id} align='center' direction='column'>
            <CircularProgress size={ isWideVersion? '80px':'120px'}  value={skill.skillStatus} color='pink.500' >
                <CircularProgressLabel color='gray.100'>{skill.skillStatus}%</CircularProgressLabel>
            </CircularProgress>

            <Flex mt='4' align='center'>
                <Image  src={skill.icon} width={8}/>
                <Text ml='2' color='gray.50'>{skill.skillName}</Text>
            </Flex>
        </Flex>
    )
}