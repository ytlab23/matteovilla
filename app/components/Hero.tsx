'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Ciao, sono Matteo Villa</h1>
          <p className="text-xl mb-8">Scrittore e specialista di Social Media Marketing</p>
          <Button asChild>
            <a href="#contact">Parliamo del tuo progetto</a>
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="border-4 border-black rounded-lg overflow-hidden w-full max-w-[500px] aspect-square relative">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matteo%20villa.jpg-Y1ShbZbEsFtlYlXyaQArPuizGCUvST.jpeg"
              alt="Matteo Villa"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

