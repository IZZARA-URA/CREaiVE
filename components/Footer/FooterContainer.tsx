import React from 'react'

export default function FooterContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='max-w-[1440px] m-auto max-h-[40vh] min-h-[25vh]'>
            {children}
        </div>
    )
}
