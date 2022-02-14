import { SimpleGrid, Heading, Text, Box, Img } from '@chakra-ui/react'

export const TwoColPicWithHeader = ({ pic, title, desc1, desc2 }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign={{ base: "center", md: "left" }} justifyContent="center" alignItems="center" p="18">
            <Box mx="auto" maxW="450px" ml="5">
                <Text fontSize="5xl">{title}</Text>
                <br/>
                <Text fontSize="2xl" color="text.dark">{desc1}</Text>
                <br/>
                <Text fontSize="2xl" color="text.dark">{desc2}</Text>
            </Box>
            <Box mx="auto" mr="5" d={{ base: 'none', md: 'block'}}>
                <Img src={pic} alt="pic" maxW="500px" maxH="450px"/>
            </Box>
        </SimpleGrid >
    )
}