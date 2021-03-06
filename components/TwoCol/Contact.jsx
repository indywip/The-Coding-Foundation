import {
    FormControl,
    Text,
    SimpleGrid,
    Input,
    Img,
    VStack,
    StackDivider,
    Textarea,
    Button,
    Box,
    useColorModeValue,
    Spinner
} from '@chakra-ui/react'
import { HeadingWithDesc } from '../Headings/HeadingWithDesc';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';



export const Contact = (props) => {
    const textColor = useColorModeValue('text.dark', 'text.light')
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let subject = document.getElementById('subject').value;
        console.log(email)
        const resp = await fetch('/api/sendEmail', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                message,
                subject
            }),
        });
        const data = await resp.json()
        if (data.accepted) {
            setIsSubmitted(true);
        }
        else {
            try {
                document.getElementById('error').style.display = 'block';
            }
            catch (e) {
                console.log(e);
            }

        }
        setLoading(false);

    };

    return (
        <>
            <HeadingWithDesc desc="Any additional questions? Interested in starting a chapter? Fill out this form!">
                Contact Us
            </HeadingWithDesc>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx="auto" textAlign="center" justifyContent="center" alignItems="center">
                <Box mx="auto" w="100%">
                    {!isSubmitted && <Formik
                        initialValues={{ name: 'Sasuke' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2))
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    >
                        <Form onSubmit={handleSubmit}>
                            <VStack
                                divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'
                            >
                                <FormControl isRequired borderRadius="20" color={textColor}>
                                    <Input id='name' placeholder='Name' color={textColor} _placeholder={{ color: textColor }} />
                                </FormControl>

                                <FormControl isRequired borderRadius="20" color={textColor}>
                                    <Input id='email' type="email" placeholder='Email' color={textColor} _placeholder={{ color: textColor }}
                                    />
                                </FormControl>


                                <FormControl isRequired borderRadius="20" color={textColor}>
                                    <Input id='subject' placeholder='Subject' color={textColor} _placeholder={{ color: textColor }} />
                                </FormControl>
                                <FormControl isRequired borderRadius="20" color={textColor}>
                                    <Textarea placeholder='Message' rows="5" id="message" _placeholder={{ color: textColor }} />
                                </FormControl>

                                <Button color="white" bg="blue.shade" _hover={{ bg: "blue.shade.hover" }} type="submit">{loading &&
                                    <Spinner mr="2" />} Send!</Button>
                            </VStack>
                            <Text bg='red.100' mt='4' p='1' rounded='lg' d='none' id='error'>There was an error, please refresh the page and try again!</Text>
                        </Form>
                    </Formik>}

                    {isSubmitted && <Text bg='blue.shade' color='white' p='1' rounded='lg'>We have received for your message! We will get back to you as soon as possible!</Text>}
                </Box>

                <Box mx="auto" d={{ base: 'none', md: 'block' }}>
                    <Img src="/contact.png" alt="pic" maxH="450px" />
                </Box>
            </SimpleGrid >

        </>

    )
}