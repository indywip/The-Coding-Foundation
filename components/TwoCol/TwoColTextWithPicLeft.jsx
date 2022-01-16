import { SimpleGrid, Heading, Text, Box, Img } from '@chakra-ui/react'

export const TwoColTextWithPicLeft = ({ pic, title, desc, bgColor }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center" bg={bgColor} alignItems="center">
            <Box mx="auto">
                <Img src={pic} alt="pic" />
            </Box>

            <Box mx="auto" align="right" maxW="500px">
                {title && <Heading color="blue.shade">{title}</Heading>}
                <Text fontSize="2xl" align="right" color="text.dark">{desc}</Text>
            </Box>
        </SimpleGrid>
    )
}