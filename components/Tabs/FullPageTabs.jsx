import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading, Img, Button, Box, SimpleGrid, HStack, List, ListItem, ListIcon, Divider, useColorModeValue } from '@chakra-ui/react'
import copy from 'clipboard-copy'
import { useState } from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
export const FullPageTabs = ({ data }) => {
    const [clicked, setClicked] = useState(false);
    const copyRefer = () => {
        setClicked(true);
        copy(window.location.href);
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    }
    const textColor = useColorModeValue('text.dark', 'text.light')
    const bgColor = useColorModeValue('gray.50', 'bkg.dark')
    const shadowColor = useColorModeValue('lg', 'dark-lg')
    const selectedBg = useColorModeValue('gray.100', 'gray.700')
    return (
        <>
            <Tabs variant="unstyled" textAlign="center">
                <TabList justifyContent="center">
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} alignItems="center">
                        {
                            data.map((item, index) => {
                                return (
                                    <Tab key={index}
                                        rounded="lg"
                                        fontWeight="bold"
                                        fontSize='lg'
                                        _selected={{ color: item.color, bg: selectedBg }}
                                        _focus={{}}
                                        shadow={shadowColor}
                                        bg={bgColor}
                                    >
                                        {item.title}
                                    </Tab>
                                )
                            })
                        }
                    </SimpleGrid>
                </TabList>
                <TabPanels>
                    {
                        data.map((item, index) => {
                            return (
                                <TabPanel bg={bgColor} shadow={shadowColor} key={index} mt="1" p={8} rounded="lg" maxW='1000px' mx='auto'>
                                    <Heading color={item.color} fontSize="5xl" mb={4}>
                                        {item.title}
                                    </Heading>

                                    <Img src={item.pic} maxH='400px' mx='auto' />

                                    <Box maxW="700px" mx="auto">
                                        <Box mt="10">
                                            <Heading color={item.color} fontSize="5xl" >
                                                {item.head1}
                                            </Heading>
                                            <Text color={textColor} fontSize="xl" mt="2">
                                                {item.desc1_1}
                                            </Text>
                                        </Box>

                                        <Box mt="10">
                                            <Heading color={item.color} fontSize="5xl">
                                                {item.head2}
                                            </Heading>

                                            <List spacing={3} mt={4}>
                                                {item.resps.map((resp, index) => {
                                                    return (
                                                        <ListItem key={index} fontSize='xl' textAlign="left">
                                                            <ListIcon as={AiFillCheckCircle} color='green.500' />
                                                            {resp}
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </Box>
                                    </Box>

                                    <Box mt="10" maxW="700px" mx="auto">
                                        <Heading color={item.color} fontSize="5xl" >
                                            {item.head3}
                                        </Heading>
                                        <Text color={textColor} fontSize="xl" mt="2">
                                            {item.desc3_1}
                                        </Text>

                                        <Divider my="8" />
                                        <Text color={textColor} fontSize="lg" mt="3" fontWeight=''>
                                            {item.closing}
                                        </Text>
                                    </Box>

                                    <HStack direction='vertical' mt="10" justifyContent="center" spacing="40px" >
                                        <Button color={item.color} px={10} bg='transparent' _hover={{ color: item.color + '.hover' }} fontSize='xl' onClick={copyRefer}>
                                            {!clicked && <Text color={item.color} fontSize="xl" >Refer a friend</Text>}
                                            {clicked && <Text color={item.color} fontSize="xl">Copied to clipboard!</Text>}
                                        </Button>
                                        <Button as='a' href={item.button1Link} target="_blank" bg={item.color} color='white' px={10} fontSize='xl' _hover={{ bg: item.color + '.hover' }}>
                                            {item.button1Text}
                                        </Button>
                                    </HStack>
                                </TabPanel>
                            )
                        })
                    }
                </TabPanels>
            </Tabs>
        </>
    )
}