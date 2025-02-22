"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import styles from "./cadastro.module.css"
import Particles from "../../components/particles/particles"
import CodeRain from "../../components/code-rain/code-rain"

export default function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
          <h1>Criar conta</h1>
          <p className={styles.subtitle}>Comece sua jornada de aprendizado</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>
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
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              <span>Criar conta</span>
              <div className={styles.buttonEffect}></div>
            </button>
          </form>
          <p className={styles.loginLink}>
            Já tem uma conta? <Link href="/login">Fazer login</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

