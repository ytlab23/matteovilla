'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView, useAnimation } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      year: 2015,
      role: "Laurea Triennale in Marketing, Consumi e Comunicazione",
      company: "Università IULM",
      link: "https://www.iulm.it/it/offerta-formativa/corsi-di-lauree-magistrali/marketing-consumi-comunicazione"
    },
    {
      year: 2018,
      role: "Master in Social Media Marketing & Digital Communication",
      company: "Università IULM",
      link: "https://www.iulm.it/it/offerta-formativa/master-executive-education/master-executive/social-media-marketing--digital-communication"
    },
    {
      year: 2019,
      role: "Social Media Manager",
      company: "Mediatica Comunicazione, Milano",
      link: "https://www.mediaticacomunicazione.it/"
    },
    {
      year: 2021,
      role: "Senior Social Media Manager",
      company: "Backlink Boss, Milano",
      link: "https://www.backlink-boss.it/"
    },
    {
      year: 2022,
      role: "Digital Marketing Specialist",
      company: "HubSpot, Dublino",
      link: "https://www.hubspot.com/"
    },
    {
      year: 2025,
      role: "Consulente & Scrittore SMM",
      company: "Freelance, ",
      links: [
        { text: "SocialItaliani", url: "https://socialitaliani.com/" },
        { text: "InsideMarketing", url: "https://www.insidemarketing.it/" }
      ]
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">La mia esperienza</h2>
        <div className="relative" ref={ref}>
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary -translate-x-1/2 hidden md:block"
            initial={{ height: 0 }}
            animate={controls}
            variants={{
              visible: { height: '100%', transition: { duration: 2 } },
              hidden: { height: 0 }
            }}
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
              }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold">{exp.year}</h3>
                    <p>{exp.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.links ? (
                        <>
                          {exp.company}
                          {exp.links.map((link, i) => (
                            <span key={i}>
                              <a 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:underline"
                              >
                                {link.text}
                                <ExternalLink size={12} className="inline ml-1" />
                              </a>
                              {i < exp.links.length - 1 ? " & " : ""}
                            </span>
                          ))}
                        </>
                      ) : (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {exp.company} <ExternalLink size={12} className="inline" />
                        </a>
                      )}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

