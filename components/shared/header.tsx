import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, Pizza, ShoppingCart, User } from 'lucide-react';
import { Italiana } from 'next/font/google';


interface Props {
    className?: string;
}

const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400']
})

export const Header = ({ className }: Props) => { 
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* left */}
                <div className='flex items-center gap-4'>
                    <Image src='/logo.png' alt='Logo' width={40} height={40}/>
                    <div>
                        <h1 className={cn('text-2xl font-black uppercase', )}  >lala pizza</h1>
                        <p className='text-sm text-gray-400 leading-3' >вкусней уже некуда</p>
                    </div>
                </div>
                

                {/* right */}
                <div className="flex items-center gap-3">
                    <Button variant="outline" className='flex items-center gap-2'>
                        <User size={16}/>
                        Войти
                    </Button>

                    <div>
                        <Button className='group relative'>
                            <b>720 C</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                                <b>0</b>
                            </div>
                            <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};