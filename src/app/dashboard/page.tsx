"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Bell, Menu, ChevronDown, LogOut, User, Award, Gift } from "lucide-react"
import styles from "./dashboard.module.css"
import DashboardLayout from "@/components/layout/dashboard-layout"

const technologies = [
  { name: "FTR", icon: "🚀", isNew: true },
  { name: "Inglês", icon: "💬" },
  { name: "Soft Skills", icon: "🤝" },
  { name: "C#", icon: "⚡" },
  { name: "DevOps", icon: "🔄" },
  { name: "Go", icon: "🔵" },
  { name: "IA", icon: "🤖" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "💛" },
  { name: "Kotlin", icon: "📱" },
  { name: "NodeJS", icon: "💚" },
  { name: "PHP", icon: "🐘" },
  { name: "Python", icon: "🐍" },
  { name: "ReactJS", icon: "⚛️" },
]

const courses = [
  {
    title: "C#",
    type: "FORMAÇÃO",
    duration: "100h",
    level: "INTERMEDIÁRIO",
    tags: ["C#", "BAC"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Inglês para Devs",
    type: "FORMAÇÃO",
    duration: "30h",
    level: "INICIANTE",
    tags: ["SOFT SKILLS", "ENG"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "ReactJS",
    type: "FORMAÇÃO",
    duration: "50h",
    level: "INTERMEDIÁRIO",
    tags: ["REACTJS", "JS"],
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Dashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <DashboardLayout>
      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.technologies}>
            <h2>Catálogo</h2>
            <p>Navegue por todo o conteúdo da {"{desenvti}"}</p>

            <div className={styles.techGrid}>
              {technologies.map((tech) => (
                <button key={tech.name} className={styles.techButton}>
                  <span className={styles.techIcon}>{tech.icon}</span>
                  <span>{tech.name}</span>
                  {tech.isNew && <span className={styles.newBadge}>NOVO</span>}
                </button>
              ))}
            </div>
          </section>

          <section className={styles.recentAccess}>
            <div className={styles.sectionHeader}>
              <h2>Acesso recente</h2>
              <Link href="/dashboard/recent" className={styles.seeMoreLink}>
                Ver mais
              </Link>
            </div>

            <div className={styles.courseGrid}>
              {courses.map((course) => (
                <div key={course.title} className={styles.courseCard}>
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={80}
                    height={80}
                    className={styles.courseImage}
                  />
                  <div className={styles.courseInfo}>
                    <span className={styles.courseType}>
                      {course.type} • {course.duration}
                    </span>
                    <h3>{course.title}</h3>
                    <div className={styles.courseTags}>
                      <span className={styles.levelTag}>{course.level}</span>
                      {course.tags.map((tag) => (
                        <span key={tag} className={styles.courseTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      {/* </div> */}
      </DashboardLayout>
  )
}

