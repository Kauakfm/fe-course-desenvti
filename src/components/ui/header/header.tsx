"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Bell, ChevronDown } from "lucide-react"
import styles from "./header.module.css"

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <Search className={styles.searchIcon} />
        <input type="text" placeholder="Busque por assuntos e aulas" className={styles.searchInput} />
      </div>

      <div className={styles.actions}>
        <button className={styles.notifications}>
          <Bell />
          <span className={styles.badge}>4</span>
        </button>

        <div className={styles.profile}>
          <button className={styles.profileButton} onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <Image src="/placeholder.svg" alt="Profile" width={32} height={32} className={styles.avatar} />
            <span className={styles.name}>Matheus</span>
            <ChevronDown className={styles.chevron} />
          </button>

          {isProfileOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <Image src="/placeholder.svg" alt="Profile" width={48} height={48} className={styles.avatar} />
                <div>
                  <strong>Matheus</strong>
                  <span>@username</span>
                </div>
                <Link href="/dashboard/profile" className={styles.profileLink}>
                  VER PERFIL
                </Link>
              </div>

              <nav className={styles.dropdownNav}>
                <Link href="/dashboard/account">
                  <strong>Minha conta</strong>
                  <span>Gerencie dados e preferências</span>
                </Link>
                <Link href="/dashboard/certificates">
                  <strong>Certificados</strong>
                  <span>Veja todos os seus certificados</span>
                </Link>
                <Link href="/dashboard/invite">
                  <strong>Indique e ganhe</strong>
                  <span>Ganhe benefícios por indicação</span>
                </Link>
              </nav>

              <button className={styles.logout}>Sair da conta</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

