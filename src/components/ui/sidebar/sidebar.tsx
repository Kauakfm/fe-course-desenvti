"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, GraduationCap, Calendar, MessageSquare, Menu, X } from "lucide-react"
import styles from "./sidebar.module.css"

const menuItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: BookOpen, label: "Minha Jornada", href: "/dashboard/journey" },
  { icon: GraduationCap, label: "Catálogo", href: "/dashboard/catalog" },
  { icon: Calendar, label: "Eventos", href: "/dashboard/events" },
  { icon: MessageSquare, label: "Fórum", href: "/dashboard/forum" },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className={styles.mobileToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <Menu /> : <X />}
        </button>
      )}

      <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.bracket}>{"{"}</span>
            <span className={styles.desenv}>desenv</span>
            <span className={styles.ti}>ti</span>
            <span className={styles.bracket}>{"}"}</span>
          </div>
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className={styles.toggle}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <Menu /> : <X />}
            </button>
          )}
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={styles.icon} />
                <span className={styles.label}>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

