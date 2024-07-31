import React from 'react'

export default function FooterContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='max-w-[1280px] m-auto md:px-4 max-h-[50vh] min-h-[40vh]'>
            {children}
        </div>
    )
}
