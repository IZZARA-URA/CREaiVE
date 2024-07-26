import React from 'react'

import Link from 'next/link'


const Links = [
    {
        id: 0,
        title: "AI HUMANS",
        path: "/ai-humans",
    },
    {
        id: 1,
        title: "AI MICROSITE",
        path: "/ai-microsites",
    },
    {
        id: 2,
        title: "AI LAB",
        path: "/ai-lab",
    },
    {
        id: 3,
        title: "HOLOVUE",
        path: "/holovue",
    },
    {
        id: 4,
        title: "PLATFORMS",
        path: "/platforms",
    },
    {
        id: 5,
        title: "BLOG",
        path: "/blog",
    },
    {
        id: 6,
        title: "CONTAG US",
        path: "/contact-us",
    },
]

const NavLinks = () => {
    return (
        <div className='flex uppercase'>
            {
                Links.map((link) => (
                    <div className='mx-2' key={link.id}>
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