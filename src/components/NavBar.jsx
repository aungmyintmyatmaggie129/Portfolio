import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = ({show3D, setShow3D}) => {
    const [scrolled, setScrolled] = useState(false);

    //Set3D button
    console.log(show3D)

    // Set scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                <a href="#hero" className='logo'>
                    AMM | Magi
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }, idx) => (
                            <li key={idx} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='flex justify-center items-center gap-4'>
                    <button onClick={() => {setShow3D(!show3D)}} className='contact-btn group'>
                        <div className='inner'>
                            <span><i className={show3D? 'fa-solid fa-image' : 'fa-solid fa-cube'}></i></span>
                        </div>
                    </button>
                    <a href="#contact" className='contact-btn group'>
                        <div className='inner'>
                            <span>Contact me</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavBar