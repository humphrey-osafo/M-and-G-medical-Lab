"use client";
import styles from "./services.module.css";
import haem from "../../m ang g images/haematology.jpg";
import micro from "../../m ang g images/microbiology.jpg";
import chem from "../../m ang g images/Clinical Chemistry.jpg";
import histo from "../../m ang g images/Histopathology.jpg";
import cyto from "../../m ang g images/Cytology.jpg";
import para from "../../m ang g images/Parasitology.jpg";

const services = [
  { title: "Haematology", desc: "Complete blood count and blood-related diagnostic tests.", image: haem },
  { title: "Microbiology", desc: "Identification of bacteria, viruses, and other pathogens.", image: micro },
  { title: "Clinical Chemistry", desc: "Analysis of bodily fluids for diagnostic purposes.", image: chem },
  { title: "Histopathology", desc: "Microscopic examination of tissue to study manifestations of disease.", image: histo },
  { title: "Cytology", desc: "Examining cells from bodily tissues or fluids.", image: cyto },
  { title: "Parasitology", desc: "Diagnosis of parasitic diseases such as Malaria.", image: para },
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Diagnostic Services</h2>
        <p className={styles.subtitle}>Comprehensive laboratory testing with state-of-the-art accuracy.</p>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card} style={{ backgroundImage: `url(${s.image.src})` }}>
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

