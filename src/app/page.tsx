"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Youtube, Instagram, ChevronLeft, ChevronRight, Code2, Brain, Terminal } from "lucide-react"
import styles from "./page.module.css"
import Particles from "../components/particles/particles"
import CodeRain from "../components/code-rain/code-rain"

const courses = [
  {
    title: "Formação Full Stack",
    description: "Desenvolva aplicações completas e torne-se um desenvolvedor full stack",
    icon: <Code2 className="h-8 w-8 text-white" />,
    tag: "MAIS POPULAR",
  },
  {
    title: "Especialização Front-end",
    description: "Crie interfaces modernas e responsivas com as tecnologias mais atuais",
    icon: <Terminal className="h-8 w-8 text-white" />,
    tag: "LANÇAMENTO",
  },
  {
    title: "Formação .NET",
    description: "Aprenda a projetar sistemas escaláveis e de alta performance",
    icon: <Code2 className="h-8 w-8 text-white" />,
    tag: "LANÇAMENTO",
  },
]

const slides = [
  {
    title: "Formação Completa em Programação",
    description: "Do zero ao profissional: aprenda a desenvolver aplicações reais",
    cta: "Comece Agora",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Especialização em React & Next.js",
    description: "Torne-se um especialista em desenvolvimento web moderno",
    cta: "Saiba Mais",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Carreira em Desenvolvimento",
    description: "Mentoria e suporte para alavancar sua carreira em tecnologia",
    cta: "Conheça o Programa",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className={styles.container}>
      <Particles />
      <CodeRain />

      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.socialLinks}>
            <Link href="#" aria-label="Github">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
          <div className={styles.topMenu}>
            <Link href="#">Blog</Link>
            <Link href="#">Quem Somos</Link>
            <Link href="#">Fale Conosco</Link>
            <Link href="#">Trabalhe Conosco</Link>
          </div>
        </div>

        <nav className={styles.mainNav}>
          <div className={styles.logo}>
            <span className={styles.bracket}>{`{`}</span>
            <span className={styles.desenv}>desenv</span>
            <span className={styles.ti}>ti</span>
            <span className={styles.bracket}>{`}`}</span>
          </div>

          <div className={styles.navLinks}>
            <div className={styles.dropdown}>
              <button>Nossos Cursos</button>
              <div className={styles.dropdownContent}>
                <Link href="#">Formação Full Stack</Link>
                <Link href="#">Especialização Front-end</Link>
                <Link href="#">MBA Software Architecture</Link>
              </div>
            </div>
            <Link href="#">Faculdade</Link>
            <Link href="#">Para Empresas</Link>
          </div>


          <div className={styles.containerButton}>
            <Link href="/cadastro" className={styles.loginButton}>
              CADASTRO
            </Link>
            <Link href="/login" className={styles.loginButton}>
              LOGIN
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Evolua em cada etapa da sua
              <span className={styles.highlight}> carreira</span>
              <br />
              no mundo da tecnologia
            </h1>
            <p>Arquitete, Lidere e Desenvolva aplicações de grande porte nas maiores empresas do mercado.</p>
          </div>

          <div className={styles.slider}>
            <button onClick={prevSlide} className={styles.sliderButton} aria-label="Previous slide">
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className={styles.slides}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ''}`}
                >
                  <div className={styles.slideContent}>
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <button className={styles.ctaButton}>{slide.cta}</button>
                  </div>
                </div>
              ))}
            </div>


            <button onClick={nextSlide} className={styles.sliderButton} aria-label="Next slide">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section className={styles.courses}>
          <h2>Conheça nossos cursos</h2>
          <div className={styles.courseGrid}>
            {courses.map((course, index) => (
              <div key={index} className={styles.courseCard}>
                <div className={styles.courseIcon}>{course.icon}</div>
                {course.tag && <span className={styles.courseTag}>{course.tag}</span>}
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className={styles.courseButton}>Saiba mais</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

