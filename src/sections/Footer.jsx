import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <a href="/">Visit my blog</a>
                </div>
                <div className='socials'>
                    {socialImgs.map((img, idx) => (
                        <a key={idx} className='icon' target='_blank' href={img.url}>
                            <img src={img.imgPath} alt={img.name}/>
                        </a>
                    ))}
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>
                        © {new Date().getFullYear()} Aung Myint Myat | Magi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer