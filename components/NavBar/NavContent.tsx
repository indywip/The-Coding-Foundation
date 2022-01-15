import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  useColorModeValue as mode,
  useDisclosure,
  VisuallyHidden,
  Img
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from './NavLink.tsx'
import { NavMenu } from './NavMenu.tsx'
import { Submenu } from './Submenu.tsx'
import { ToggleButton } from './ToggleButton.tsx'
import { links } from './_data.tsx'

const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props}>
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto" href="/">
          <Img src="/logo.png" alt="Keep" maxW="150px" />
        </Box>
        <Box visibility={{ base: 'hidden', sm: 'visible' }}>
          <Button bg="blue.shade" color="white" as="a" href="#" borderRadius="20">
            Create Account
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          ),
        )}
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props: FlexProps) => {
  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Box as="a" href="#" rel="home">
        <VisuallyHidden>Envelope</VisuallyHidden>
        <Img src="/logo.png" alt="Keep" maxW="150px" />
      </Box>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="100px" justify="space-between">
        <Button bg="blue.shade" color="white" as="a" href="#" borderRadius="20">
          Create Account
        </Button>

      </HStack>
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
