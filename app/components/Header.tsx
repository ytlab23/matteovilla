'use client'

import Link from 'next/link'
import { User, Briefcase, MessageSquare, Mail } from 'lucide-react'

const MenuItem = ({ href, icon: Icon, children }) => (
  <li>
    <Link 
      href={href} 
      className="block relative px-4 py-2 group"
    >
      <div className="absolute inset-0 bg-black transform origin-left transition-transform duration-200 ease-out scale-x-0 group-hover:scale-x-100" />
      <div className="relative flex items-center z-10 group-hover:text-white transition-colors duration-200">
        <Icon className="mr-2 h-4 w-4" />
        <span>{children}</span>
      </div>
    </Link>
  </li>
)

export default function Header() {
  return (
    <header className="py-4 px-6 bg-background border-b">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Matteo Villa</Link>
        <ul className="flex space-x-2">
          <MenuItem href="#about" icon={User}>Chi sono</MenuItem>
          <MenuItem href="#experience" icon={Briefcase}>Esperienza</MenuItem>
          <MenuItem href="#testimonials" icon={MessageSquare}>Testimonianze</MenuItem>
          <MenuItem href="#contact" icon={Mail}>Contatti</MenuItem>
        </ul>
      </nav>
    </header>
  )
}

