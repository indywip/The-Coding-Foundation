import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading.tsx'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Navigate</FooterHeading>
      <Stack>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/join'>Join Our Team</Link>
        <Link href='/events'>Events</Link>
        <Link href='https://discord.gg/5gmWzdR5Ud' isExternal>Discord</Link>
        <Link>FAQ</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Resources</FooterHeading>
      <Stack>
        <Link href='/tutoring'>Tutoring</Link>
        <Link href='/workshops'>Workshops</Link>
        <Link href='https://www.termsfeed.com/live/e4368a89-7481-408a-a0cf-92910a1b85c0' isExternal>Terms of Service</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
