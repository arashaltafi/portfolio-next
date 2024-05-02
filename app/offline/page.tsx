import Links from '@/components/Links';
import Link from 'next/link';
import React from 'react';

const OfflinePage = () => {


    return (
        <div
            className='select-none w-full h-[90vh] flex flex-col items-center justify-around px-16 py-8 overflow-hidden'>
            <h1 className='h1'>
                FallBack Page!
            </h1>

            <Link href={'/'} className='btn btnPrimary'>
                Back To Home
            </Link>
        </div>
    )
}

export default OfflinePage