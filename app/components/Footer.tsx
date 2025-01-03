import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-background border-t">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
        <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
        <a href="#" aria-label="LinkedIn"><LinkedIn className="w-5 h-5" /></a>
        <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
      </div>
      <p className="text-sm font-light text-muted-foreground">&copy; {new Date().getFullYear()} Matteo Villa. Tutti i diritti riservati.</p>
    </footer>
  )
}

