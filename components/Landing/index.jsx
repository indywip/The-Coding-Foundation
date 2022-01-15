import { SimpleGrid, Box, Heading, Button, Text, Img, HStack } from '@chakra-ui/react'

export const Landing = ({ title, desc, button1, link1, button2, link2, pic }) => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
                <Box d="flex" justifyContent="center">
                    <Box align="center" alignSelf="center" >
                        <Heading size="4xl" as="h1" color="text.dark" >{title}</Heading>
                        <Text fontStyle="italic" color="gray.600" fontSize="xl" my="3">{desc}</Text>

                        <HStack justifyContent="center">
                            <Button as="a" bg="blue.shade" borderRadius="20px" color="white" fontWeight="bold" px="10" shadow="lg" fontSize="xl" _hover={{ bg: "blue.shade.hover" }} href={link1}>{button1}</Button>

                            <Button as="a" color="blue.shade" fontSize="xl" fontWeight="bold" px="10" bg="transparent" _hover={{ color: "blue.shade.hover" }} href={link1}>{button2}</Button>
                        </HStack>
                    </Box>
                </Box>
                <Box >
                    <Img src={pic} />
                </Box>


            </SimpleGrid>
        </>
    )
}