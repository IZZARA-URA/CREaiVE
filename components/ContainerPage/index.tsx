import React from 'react'

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='max-w-[1280px] h-full m-auto md:px-4 items-center'>
            {children}
        </div>
    )
}
