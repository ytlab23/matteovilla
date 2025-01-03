'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Tim",
      role: "Marketing Manager, HubSpot",
      text: "Matteo ha portato una ventata di freschezza al nostro team. La sua conoscenza dei social media è impressionante."
    },
    {
      name: "Marco",
      role: "Editore, SocialiItaliani",
      text: "I contenuti di Matteo sono sempre puntuali, informativi e coinvolgenti. Un vero professionista del settore."
    },
    {
      name: "Roberto",
      role: "Founder, MediaticaComunicazione",
      text: "Matteo ha una capacità unica di tradurre strategie complesse in azioni concrete sui social media. Un talento raro."
    },
    {
      name: "Jacopo",
      role: "Founder, Backlink Boss",
      text: "La consulenza di Matteo ha trasformato la nostra presenza sui social. I risultati parlano da soli. Altamente raccomandato!"
    }
  ]

  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-6" ref={ref}>
        <h2 className="text-3xl font-bold mb-10 text-center">Cosa dicono di me</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
              }}
            >
              <Card>
                <CardContent className="p-6">
                  <motion.div 
                    className="flex mb-2"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                      >
                        <Star className="text-yellow-400" size={18} fill="currentColor" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="mb-4">"{testimonial.text}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

