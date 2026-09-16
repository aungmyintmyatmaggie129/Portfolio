import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = ({show3D, isSwitching, onToggle3D}) => {
    const [scrolled, setScrolled] = useState(false);

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
                <div className='nav-actions'>
                    <button
                        type='button'
                        onClick={onToggle3D}
                        className={`contact-btn group ${isSwitching ? 'loading' : ''}`}
                        disabled={isSwitching}
                        aria-label={show3D ? 'Switch to normal photo mode' : 'Switch to 3D mode'}
                    >
                        <div className='inner'>
                            <span className='mode-toggle-content'>
                                {isSwitching ? (
                                    <i className='fa-solid fa-spinner mode-spinner'></i>
                                ) : (
                                    <i className={show3D ? 'fa-solid fa-image' : 'fa-solid fa-cube'}></i>
                                )}
                            </span>
                        </div>
                    </button>
                    <a href="#contact" className='contact-btn group'>
                        <div className='inner'>
                            <span>Contact me</span>
                        </div>
                    </a>
                    <a href="/assets/Aung_Myint_Myat_CV_resume.pdf" download="Aung_Myint_Myat_CV_resume.pdf" className='contact-btn group'>
                        <div className='inner'>
                            <span><i className="fa-solid fa-file-arrow-down"></i></span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavBar