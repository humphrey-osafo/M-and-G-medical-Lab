"use client";
import Image from 'next/image';
import styles from "./whyChoose.module.css";
import { FaBolt, FaAward, FaMicroscope, FaUserMd } from 'react-icons/fa';

const features = [
  {
    id: 1,
    title: "Fast Turnaround",
    description: "Get your results quickly with our automated systems.",
    icon: <FaBolt className={styles.icon} />,
    isChecked: false
  },
  {
    id: 2,
    title: "Accredited Laboratory",
    description: "Recognized for quality assurance and compliance.",
    icon: <FaAward className={styles.icon} />,
    isChecked: true
  },
  {
    id: 3,
    title: "State-of-the-art Tech",
    description: "Using modern diagnostic equipment for precision.",
    icon: <FaMicroscope className={styles.icon} />,
    isChecked: false
  },
  {
    id: 4,
    title: "Expert Staff",
    description: "Board-certified professionals dedicated to your care.",
    icon: <FaUserMd className={styles.icon} />,
    isChecked: true
  }
];

const highlight = {
  title: "MODERN FACILITY",
  image: {
    filename: "facility.jpeg",
    path: "/images/facility.jpeg",
    alt: "Modern medical facility at M & G Medical Diagnostic Center"
  }
};

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose M & G?</h2>
          <p className={styles.subtitle}>
            We are committed to providing patient-friendly diagnostic services with the highest standards of integrity, reliability, and efficiency.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={`${styles.featureIcon} ${feature.isChecked ? styles.checked : ''}`}>
                  {feature.icon}
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
                {feature.isChecked && (
                  <div className={styles.checkmark}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.highlight}>
            <div className={styles.highlightImage}>
              <Image
                src={highlight.image.path}
                alt={highlight.image.alt}
                width={600}
                height={400}
                className={styles.image}
                priority
              />
              <div className={styles.highlightBadge}>
                {highlight.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
