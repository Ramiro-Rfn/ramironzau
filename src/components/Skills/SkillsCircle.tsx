import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

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
            <Flex mt='4' align='center' direction="column">
                <Image  src={skill.icon} width={16}/>
                <Text ml='2' color='gray.50'>{skill.skillName}</Text>
            </Flex>
        </Flex>
    )
}