import { Grid, GridItem } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export function BackgroundLines() {
    return (
        <Grid border={1} templateColumns='repeat(5, 1fr)' textColor="white"  position="absolute" w="full" zIndex={-1} h="full">
            <GridItem position="relative" borderRight="1px" borderBottom="1px" borderColor="gray.800">
                <FiPlus style={{position: "absolute"}}/>
            </GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
            <GridItem borderRight="1px" borderBottom="1px" borderColor="gray.800">1</GridItem>
        </Grid>
    )
}