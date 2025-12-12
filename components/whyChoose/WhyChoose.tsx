"use client";
import Image from 'next/image';
import styles from "./whyChoose.module.css";

const reasons = [
  { title: "State-of-the-Art Equipment", description: "Modern diagnostic equipment for accurate results" },
  { title: "Experienced Professionals", description: "Highly trained laboratory staff and technicians" },
  { title: "Fast Turnaround Time", description: "Quick and efficient result processing" },
  { title: "Affordable Services", description: "Competitive pricing without compromising quality" },
];

// Function to check if image exists
async function checkImageExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export default function WhyChoose() {

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose M & G?</h2>
        <p className={styles.subtitle}>We are committed to providing patient-friendly diagnostic services with the highest standards of integrity, reliability, and efficiency.</p>

        <div className={styles.content}>
          <div className={styles.reasonsGrid}>
            {reasons.map((reason, idx) => (
              <div key={idx} className={styles.reasonCard}>
                <div className={styles.reasonIcon}>{idx + 1}</div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
