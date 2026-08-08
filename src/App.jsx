import React from 'react'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import LogoSection from './sections/LogoSection'
import FeatureCard from './sections/FeatureCard'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <LogoSection/>
            <FeatureCard/>
            <ExperienceSection/>
            <TechStack/>
            <Testimonials/>
            <ContactSection/>
            <Footer/>
        </>
    )
}

export default App