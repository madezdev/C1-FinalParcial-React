import React from 'react'
import { navLinks } from '../navbar/links'

export const Footer = () => {
  return (
    <footer className='absolute flex justify-center items-center h-[100px] bg-slate-500 mt-8 w-full left-0 right-0 overflow-hidden '>
        <div>
            <ul className='flex gap-4'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.path} className='text-gray-400 text-[20px] hover:text-gray-900 transition duration-300 py-2 px-3 rounded-md hover:bg-[#a1d1f6] '>{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}
