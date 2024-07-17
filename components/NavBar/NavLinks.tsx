import React from 'react'

import Link from 'next/link'



const Links = [
    {
        title: "AI HUMANS",
        path: "/ai-humans",
    },
    {
        title: "AI MICROSITE",
        path: "/ai-microsites",
    },
    {
        title: "AI LAB",
        path: "/ai-lab",
    },
    {
        title: "HOLOVUE",
        path: "/holovue",
    },
    {
        title: "PLATFORMS",
        path: "/platforms",
    },
    {
        title: "BLOG",
        path: "/blog",
    },
    {
        title: "CONTAG US",
        path: "/contact-us",
    },
]



const NavLinks = () => {
    return (
        <div className='flex uppercase'>
            {
                Links.map((link) => (
                    <div className='mx-2'>
                        <Link key={link.path} href={link.path}>
                            {link.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default NavLinks