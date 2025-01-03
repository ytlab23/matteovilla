'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [captcha, setCaptcha] = useState({ num1: Math.floor(Math.random() * 10), num2: Math.floor(Math.random() * 10) })
  const [captchaAnswer, setCaptchaAnswer] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (parseInt(captchaAnswer) === captcha.num1 + captcha.num2) {
      alert('Form submitted successfully!')
      // Here you would typically send the form data to your server
    } else {
      alert('Captcha incorrect. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-10 text-center">Parliamo del tuo progetto</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" placeholder="Il tuo nome" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="La tua email" required />
          </div>
          <div>
            <Label htmlFor="message">Messaggio</Label>
            <Textarea id="message" placeholder="Il tuo messaggio" required />
          </div>
          <div>
            <Label htmlFor="captcha">Captcha: {captcha.num1} + {captcha.num2} = ?</Label>
            <Input 
              id="captcha" 
              type="number" 
              placeholder="La tua risposta" 
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required 
            />
          </div>
          <Button type="submit" className="w-full">Invia</Button>
        </form>
      </div>
    </section>
  )
}

