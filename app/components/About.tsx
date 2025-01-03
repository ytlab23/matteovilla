'use client'

import { CalendarDays, GraduationCap, MapPin, Newspaper } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { icon: CalendarDays, text: 'Nato nel 1992' },
    { icon: MapPin, text: 'Milano' },
    { icon: GraduationCap, text: 'Laurea Magistrale in Marketing, Consumi e Comunicazione (IULM)' },
    { icon: GraduationCap, text: 'Master in Social Media Marketing & Digital Communication (IULM)' },
    { icon: Newspaper, text: 'Scrittore per insidemarketing e socialitaliani' },
  ]

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Chi sono</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <table className="w-full">
              <tbody>
                {items.map((item, index) => (
                  <motion.tr 
                    key={index}
                    className={index % 2 === 0 ? 'bg-background' : 'bg-muted'}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="p-4">
                      <item.icon className="mr-2 inline" />
                      {item.text}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:w-1/2">
            <p className="mb-4">
              Ciao! Sono Matteo, un appassionato di social media fin da quando Facebook ha iniziato a spopolare. 
              La mia passione è diventata la mia professione, e oggi mi dedico a aiutare aziende e professionisti 
              a sfruttare al meglio il potenziale dei social media.
            </p>
            <p>
              Dopo aver lavorato come social media manager per due agenzie digitali a Milano e come Digital Marketing 
              Specialist per HubSpot, ora mi dedico alla scrittura di contenuti specializzati e offro servizi di 
              consulenza. Il mio obiettivo? Rendere il marketing sui social accessibile ed efficace per tutti.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

