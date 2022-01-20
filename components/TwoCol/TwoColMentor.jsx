import { SimpleGrid, Heading, Text, Box, Img, Link} from '@chakra-ui/react'

export const TwoColMentor = ({ pic, title, desc1, desc2, desc3, desc4, question, link, bgColor }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" justifyContent="center" bg={bgColor} alignItems="center">
            <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                <Img src={pic} alt="pic" />
            </Box>

            <Box mx="auto" textAlign={{ base: "center" }} maxW="500px">
                {title && <Heading color="blue.shade">{title}</Heading>}
                <Text fontSize="lg" color="text.dark">{desc1}</Text>
                <br></br>
                <Text fontSize="lg" color="text.dark">{desc2}</Text>
                <br></br>
                <Text fontSize="lg" color="text.dark">{desc3}</Text>
                <br></br>
                <Text fontSize="lg" color="text.dark">{desc4}</Text>
                <br></br>
                <Link fontSize="lg" color="blue.shade" href={link}>{question}</Link>
            </Box>

        </SimpleGrid >
    )
}