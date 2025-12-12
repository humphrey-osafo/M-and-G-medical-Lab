"use client"
import Link from "next/link"
import { FaMicroscope, FaHeartPulse, FaFlask, FaDna, FaViruses, FaUserDoctor } from "react-icons/fa6"
import { motion } from "framer-motion"
import styles from "./services.module.css"
import { PremiumIcon } from "../ui/PremiumIcon"

const services = [
  {
    icon: FaHeartPulse,
    title: "Haematology",
    description: "Complete blood count and blood-related diagnostic tests.",
    backgroundImage: "/images/haematology.jpg",
  },
  {
    icon: FaViruses,
    title: "Microbiology",
    description: "Identification of bacteria, viruses, and other pathogens.",
    backgroundImage: "/images/microbiology.jpg",
  },
  {
    icon: FaFlask,
    title: "Clinical Chemistry",
    description: "Analysis of bodily fluids for diagnostic purposes.",
    backgroundImage: "/images/clinical-20chemistry.jpg",
  },
  {
    icon: FaMicroscope,
    title: "Histopathology",
    description: "Microscopic examination of tissue to study manifestations of disease.",
    backgroundImage: "/images/hispathology.jpg",
  },
  {
    icon: FaDna,
    title: "Cytology",
    description: "Examining cells from bodily tissues or fluids.",
    backgroundImage: "/images/cytology.jpg",
  },
  {
    icon: FaUserDoctor,
    title: "Parasitology",
    description: "Diagnosis of parasitic diseases such as Malaria.",
    backgroundImage: "/images/parasitology.jpg",
  },
]

export default function ServicesOverview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Diagnostic Services</h2>
          <p className={styles.subtitle}>Comprehensive laboratory testing with state-of-the-art accuracy.</p>
        </div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={item}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <div className={styles.iconWrapper}>
                  <PremiumIcon icon={service.icon} size={32} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.ctaWrapper}>
          <Link href="/services" className={styles.viewAllBtn}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
