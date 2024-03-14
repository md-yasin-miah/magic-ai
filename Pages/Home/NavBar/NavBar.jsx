import { centralImages } from '@/utils/images/centralImages';
import { NavItem } from '@/utils/mock/mockData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <header className='site-header top-12 group/header absolute inset-x-0 z-50 text-white transition-[background,shadow] [&.lqd-is-sticky]:bg-white [&.lqd-is-sticky]:text-black [&.lqd-is-sticky]:shadow-[0_4px_20px_rgba(0,0,0,0.03)]'>
            <nav className='relative flex items-center justify-between border-b border-white border-opacity-10 px-7 py-4 text-[14px] opacity-0 transition-all duration-500 group-[.lqd-is-sticky]/header:border-black group-[.lqd-is-sticky]/header:border-opacity-5 group-[.page-loaded]/body:opacity-100 max-sm:px-2'>
                <Link href="/" className='site-logo relative basis-1/3 max-lg:basis-1/3'>
                    <Image src={centralImages?.logoDark} alt="logo" className='peer absolute start-0 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 transition-all group-[.lqd-is-sticky]/header:translate-x-0 group-[.lqd-is-sticky]/header:opacity-100' />
                    <Image src={centralImages?.logo} alt="logo" className='transition-all group-[.lqd-is-sticky]/header:peer-first:translate-x-2 group-[.lqd-is-sticky]/header:peer-first:opacity-0' />
                </Link>
                <div>
                    <div>
                        <ul>
                            {NavItem?.map((item) => (
                                <li key={item?.id}>
                                    <Link href={item?.link}>{item?.itemName}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div></div>
                    <Link href="/login">Sign In</Link>
                    <Link href="/register">Join Hub</Link>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;