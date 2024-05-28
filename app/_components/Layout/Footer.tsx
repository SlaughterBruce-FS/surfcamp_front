import Link from 'next/link'
import React from 'react'
import logo from '../../../public/assets/surf_logo.png'
import Image from 'next/image'

const Footer = () => {
    const navItems = [
        {
            display: "the camp",
            sluf: "/"
        }, {
            display: "the experience",
            sluf: "/experience"
        }, {
            display: "the blog",
            sluf: "/blog"
        }
    ]

    const footerItems = [
        {
            display: "Imprint",
            sluf: "/"
        }, {
            display: "terms & conditions",
            sluf: "/"
        }, {
            display: "Data & Protection",
            sluf: "/"
        }
    ]
    return (
        <footer className=' bg-black text-white'>
            <div className='flex container mx-auto justify-between items-center mb-4'>
                <Image src={logo} alt='logo' height={80} />
                <ul className="gap gap-10 flex text-2xl capitalize">
                    {navItems.map((link, index) => (
                        <Link key={index} href={link.sluf} >{link.display}</Link>
                    ))}
                </ul>
            </div>
            <div className='flex justify-between items-center my-4 container mx-auto'>
                <ul className="gap gap-10 flex text-2xl capitalize">
                    {footerItems.map((link, index) => (
                        <Link key={index} href={link.sluf} >{link.display}</Link>
                    ))}
                </ul>

                <p className='text-xl'>&copy; Bennys Surf Shop - all rights reserved 2024</p>
            </div>
        </footer>
    )
}

export default Footer