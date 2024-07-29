import React from 'react'

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='max-w-[1280px] m-auto h-[90vh] items-center'>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}
