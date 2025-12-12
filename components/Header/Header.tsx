import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <span className={styles.brandName}>M & G</span>
                        <span className={styles.brandSub}>Diagnostic Center</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/services" className={styles.navLink}>Services</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </nav>

                <div className={styles.ctaWrapper}>
                    <Link href="/booking" className={styles.ctaButton}>
                        <span className={styles.ctaContent}>Book Appointment</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
