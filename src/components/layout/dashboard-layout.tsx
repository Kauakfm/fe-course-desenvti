import type React from "react"
import Sidebar from "@/components/ui/sidebar/sidebar"
import Header from "@/components/ui/header/header"
import styles from "./dashboard-layout.module.css"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

