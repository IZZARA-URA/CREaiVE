import React from 'react'

export default function FooterContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='max-w-[1280px] m-auto md:px-2 max-h-[40vh] min-h-[25vh]'>
            {children}
        </div>
    )
}
