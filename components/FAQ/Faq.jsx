import { Accordion, Heading, AccordionItem, Text, AccordionButton, AccordionPanel, Box, AccordionIcon } from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc'
import Posts from "../../data/faq.json"
import { useColorModeValue } from '@chakra-ui/react'
export const Faq = () => {
    const bg = useColorModeValue('blue.shade', 'blue.dark.shade')
    return (
        <>
            <HeadingWithDesc desc="If you don't find your answer here, send us an email at thecodingfoundation@gmail.com!">FAQ</HeadingWithDesc>
            <Accordion allowToggle mt={4}>
                {Posts.map((data, i) => {
                    return (
                        <AccordionItem key={i}>
                            <h2>
                                <AccordionButton _expanded={{ bg: bg, color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                        {data.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {data.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </>
    )
}