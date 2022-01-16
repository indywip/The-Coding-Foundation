import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar/index.tsx'
import { Footer } from '../components/Footer/index.tsx'
import { Landing } from '../components/Landing/index'
import { MedSep } from '../components/Separators/MedSep'
import { TwoColText } from '../components/TwoCol/TwoColText'
import { TwoColTextWithPicLeft } from '../components/TwoCol/TwoColTextWithPicLeft'
import { TwoColTextWithPicRight } from '../components/TwoCol/TwoColTextWithPicRight'
import { HeadingWithDesc } from '../components/Headings/HeadingWithDesc'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Coding Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />


      <Container maxW="container.xl">
        <Landing
          title="The Coding Foundation"
          desc="Empowering Students Coding Ambititons to 
          Reality"
          button1="Sign Up"
          link1="/signup"
          button2="Learn More"
          link2="/about"
          pic="/home.png"
        />

        <MedSep />

        <TwoColText
          title1="Our Mission"
          desc1="The Coding Foundation aims to bring free, effective and encouraging CS education for all students. To do so, The Coding Foundation offers free mentoring to foster a love in coding technology for kids!"
          title2="Who Are We?"
          desc2="TCF is a nonprofit organization that empowers students from all backgrounds with ambitions in coding. Our mission is to bring FREE, effective & encouraging CS mentoring to the next generation of innovators!"
        />

        <MedSep />

        <HeadingWithDesc desc="Let’s Get Started">
          Welcome to the future of Coding Classes
        </HeadingWithDesc>

        <TwoColTextWithPicLeft
          pic="/why_us.png"
          title="Why Us?"
          desc="The Coding Foundation aims to bring free, effective and encouraging CS education for all students in different backgrounds. To do so, The Coding Foundation offers free mentoring to foster a love in coding technology for kids. "
          bgColor="transparent"
        />

        <TwoColTextWithPicRight
          desc="In addition, we also offer free resources for students to explore the field of STEM and get a head start on their ambitions. Through fun and engaging activities, The Coding Foundation ensures that students become inspired to work with technology in the future."
          pic="/credit_cards.png"
        />
        <Footer />
      </Container>

    </>
  )
}