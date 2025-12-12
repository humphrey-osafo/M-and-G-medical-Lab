"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <video
                className={styles.videoBackground}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/M-and-G-medical-Lab-main/public/hero-background-Uk0mBJgUW7Msx5xaJFbaCMBVlIMNn6.webm" type="video/webm" />
            </video>
            <div className={styles.bgOverlay}></div>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.textContent}
                >
                    <h1 className={styles.title}>
                        Advanced Diagnostics.<br />
                        <span className={styles.highlight}>Patient-Centered Care.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Fast, accurate results from Accra's internationally recognized laboratory established since 1996
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/booking" className={styles.primaryBtn}>
                            <span className={styles.btnText}>Book a Test</span>
                        </Link>
                        <Link href="/services" className={styles.secondaryBtn}>
                            <span className={styles.btnText}>View Services</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Slanted Bottom Edge */}
            <div className={styles.bottomEdge}></div>
        </section>
    );
}
