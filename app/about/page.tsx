"use client";
import React from 'react';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Hero / Header */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>About M & G</h1>
                    <p className={styles.subtitle}>Setting the standard for medical diagnostics in Accra.</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.mvSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Our Mission</h3>
                            <p>To be patient-friendly and ensure clients receive the best quality of examination results.</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Our Vision</h3>
                            <p>To become an internationally recognized medical laboratory diagnostic center known for excellence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Core Values</h2>
                    <div className={styles.valuesGrid}>
                        {['Integrity', 'Reliability', 'Efficiency', 'Trust', 'Client Satisfaction', 'Accountability', 'Quality'].map((val, idx) => (
                            <div key={idx} className={styles.valueItem}>
                                {val}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story / Context */}
            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <h2 className={styles.sectionTitle}>State-of-the-Art Care</h2>
                        <p className={styles.text}>
                            Located in Mamprobi, Korle-Bu, M & G Medical Diagnostic Center has established itself as a leader in diagnostic precision.
                            Our facility is equipped with modern automated analyzers and imaging technology to ensure every test result is accurate and timely.
                        </p>
                        <p className={styles.text}>
                            We are accredited by the NHS and staffed by board-certified professionals dedicated to your health and well-being.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
