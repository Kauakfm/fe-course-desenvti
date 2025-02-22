"use client"

import type React from "react"

import { useState } from "react"
import styles from "./login.module.css"
import Particles from "../../components/particles/particles"
import CodeRain from "../../components/code-rain/code-rain"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  const { email, password} = formData
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <body>
    <main className={styles.container}>
      <Particles />
      <CodeRain />
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.bracket}>{`{`}</span>
            <span className={styles.desenv}>desenv</span>
            <span className={styles.ti}>ti</span>
            <span className={styles.bracket}>{`}`}</span>
          </div>
          <div className={styles.tagline}>Transformando ideias em código</div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <Link href="/" className={styles.backButton}>
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </Link>
          <h1>Bem-vindo de volta</h1>
          <p className={styles.subtitle}>Continue sua jornada de aprendizado</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              <span>Entrar</span>
              <div className={styles.buttonEffect}></div>
            </button>
          </form>
        </div>
      </div>
    </main>
    </body>
  )
}

