"use client"
import Image from "next/image"
import { FaClock, FaShieldHalved, FaAward, FaUserDoctor } from "react-icons/fa6"
import { motion } from "framer-motion"
import styles from "./trust.module.css"
import { PremiumIcon } from "../ui/PremiumIcon"

const trustPoints = [
  {
    icon: FaClock,
    title: "Fast Turnaround",
    desc: "Get your results quickly with our automated systems.",
  },
  {
    icon: FaShieldHalved,
    title: "State-of-the-art Tech",
    desc: "Using modern diagnostic equipment for precision.",
  },
  {
    icon: FaAward,
    title: "Accredited Service",
    desc: "Recognized for quality assurance and compliance.",
  },
  {
    icon: FaUserDoctor,
    title: "Expert Staff",
    desc: "Board-certified professionals dedicated to your care.",
  },
]

export default function TrustIndicators() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.title}>
              Why Choose <span className={styles.highlight}>M & G</span>?
            </h2>
            <p className={styles.description}>
              We are committed to providing patient-friendly diagnostic services with the highest standards of
              integrity, reliability, and efficiency.
            </p>

            <div className={styles.grid}>
              {trustPoints.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  <div className={styles.iconBox}>
                    <PremiumIcon icon={item.icon} size={28} />
                  </div>
                  <div>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.imageSide}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.placeholderImg}>
              <Image
                src="/images/facility.jpeg"
                alt="M & G Medical Diagnostic Center facility"
                fill
                className={styles.facilityImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
