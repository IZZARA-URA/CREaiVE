import React from 'react'

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='max-w-[1440px] m-auto bg-blue-500'>
            {children}
        </div>
    )
}
