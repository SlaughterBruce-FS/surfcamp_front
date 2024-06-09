import Image from "next/image"
import logo from '../../../public/assets/surf_logo.png'
import Link from "next/link"


const Header = () => {

    const navItems = [
        {
            display: "the camp",
            slug: "/"
        },
        {
            display: "the experience",
            slug: "/experience"
        },
        {
            display: "the blog",
            slug: "/blog"
        }
    ]
    return (
        <header className="header flex flex-row justify-between items-center container mx-auto my-4 absolute top-0 left-0 right-0 z-40 text-teal-300">
            <Image className="header__logo" src={logo} height={80} alt="logo" />
            <ul className="gap gap-10 flex text-4xl capitalize pr-10 md:pr-0">
                {navItems.map((link, index) => (
                    <Link key={index} href={link.slug} >{link.display}</Link>
                ))}
            </ul>

            <Link href='#' className="text-4xl hidden md:flex rounded-full bg-black text-white px-6 py-4"  >Book Now</Link>
        </header>
    )
}

export default Header