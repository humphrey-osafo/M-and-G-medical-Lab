"use client";

import styles from './testimonials.module.css';

const testimonials = [
    {
        id: 1,
        quote: "The staff were incredibly professional and the results were ready faster than I expected. Best diagnostic center in Accra!",
        author: {
          name: "Sarah A.",
          role: "PATIENT",
        },
    },
    {
        id: 2,
        quote: "Clean environment and modern equipment. I felt very safe and cared for during my checkup.",
        author: {
          name: "Kwame O.",
          role: "PATIENT",
        },
    },
    {
        id: 3,
        quote: "I consistently refer my patients to M & G because I trust their accuracy and reliability.",
        author: {
          name: "Dr. Mensah",
          role: "REFERRING DOCTOR",
        },
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>What Our Patients Say</h2>
            <div className={styles.grid}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className={styles.card}>
                        <div className={styles.quoteIcon}>&ldquo;</div>
                        <p className={styles.review}>{testimonial.quote}</p>
                        <div className={styles.author}>
                            <div className={styles.name}>{testimonial.author.name}</div>
                            <div className={styles.tag}>{testimonial.author.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}