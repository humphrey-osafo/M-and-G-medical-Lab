import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './teamsection.module.css';

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/staff.jpeg"
              alt="M&G Medical Diagnostic Center Team"
              width={600}
              height={800}
              className={styles.teamImage}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.contentWrapper}>
            <div className={styles.accentLine}></div>
            <h2 className={styles.title}>The Faces Behind Your Care</h2>
            <p className={styles.paragraph}>
              At M & G Medical Diagnostic Center, every test is handled by experienced professionals who understand that behind every sample is a person seeking answers. Our team of certified laboratory scientists, skilled technologists, and compassionate support staff work together to deliver fast, accurate results you can trust.
            </p>
            <p className={styles.paragraph}>
              From the moment you walk through our doors to the time you receive your results, you&apos;re in the hands of experts who care about your health as much as you do.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100+ Years</span>
                <span className={styles.statDescription}>Combined Experience</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>50,000+</span>
                <span className={styles.statDescription}>Tests Performed Annually</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>24-Hour</span>
                <span className={styles.statDescription}>Average Turnaround Time</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>29 Years</span>
                <span className={styles.statDescription}>Serving Accra Since 1996</span>
              </div>
            </div>
            <Link href="/about" passHref>
              <button className={styles.ctaButton}>
                Experience the M & G Difference
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;