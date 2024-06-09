import Link from 'next/link'
import React from 'react'
import logo from '../../../public/assets/surf_logo.png'
import Image from 'next/image'

const Footer = () => {
    const navItems = [
        {
            display: "the camp",
            slug: "/"
        },

        {
            display: "the blog",
            slug: "/blog"
        }
    ]

    const footerItems = [
        {
            display: "Imprint",
            slug: "/"
        }, {
            display: "terms & conditions",
            slug: "/"
        }, {
            display: "Data & Protection",
            slug: "/"
        }
    ]
    return (
        <footer className=' bg-black text-white'>
            <div className='flex container mx-auto justify-between items-center mb-4'>
                <Image src={logo} alt='logo' height={80} />

            </div>
            <div className='flex justify-between items-center mt-4 container mx-auto'>
                <ul className="gap gap-10 flex text-2xl capitalize">
                    {footerItems.map((link, index) => (
                        <Link key={index} href={link.slug} >{link.display}</Link>
                    ))}
                </ul>

                <p className='text-xl'>&copy; Bennys Surf Shop - all rights reserved 2024</p>
            </div>
        </footer>
    )
}

export default Footer