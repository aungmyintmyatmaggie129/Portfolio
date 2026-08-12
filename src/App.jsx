import React, {useState} from 'react'
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

    const [show3D, setShow3D] = useState(true);
    return (
        <>
            <NavBar show3D={show3D} setShow3D={setShow3D} />
            <Hero show3D={show3D} setShow3D={setShow3D} />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCard />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <ContactSection show3D={show3D} setShow3D={setShow3D} />
            <Footer />
        </>
    )
}

export default App