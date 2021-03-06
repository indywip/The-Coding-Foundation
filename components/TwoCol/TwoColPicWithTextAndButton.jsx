import { SimpleGrid, Box, Text, Heading, Img, Button } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
export const TwoColPicWithTextAndButton = ({ title, desc, themeColor, themeHover, pic, buttonText, buttonLink }) => {
    const textColor = useColorModeValue('text.dark', 'text.light')
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" justifyContent="center" alignItems="center" p={5}>
            <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                <Img src={pic} alt="pic" maxH="450px" />
            </Box>

            <Box mx="auto" textAlign={{ base: "center", md: "right" }} maxW="400px">
                {title && <Heading color={themeColor}>{title}</Heading>}
                <Text fontSize="2xl" color={textColor} my="5">{desc}</Text>
                <Button as="a" bg={themeColor} href={buttonLink} color="white" fontWeight="bold" shadow="lg" _hover={{ bg: themeHover }} px="10" fontSize="lg">
                    {buttonText}
                </Button>
            </Box>
        </SimpleGrid>
    )


}

