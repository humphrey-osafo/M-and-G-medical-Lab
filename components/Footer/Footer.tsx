import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.col}>
                        <div className={styles.brand}>
                            <span className={styles.brandName}>M & G</span>
                            <span className={styles.brandSub}>Medical Diagnostic Center</span>
                        </div>
                        <p className={styles.bio}>
                            Providing world-class diagnostic services with accuracy and integrity. Accredited by the NHS.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.col}>
                        <h4 className={styles.heading}>Services</h4>
                        <ul className={styles.list}>
                            <li><Link href="/services">Haematology</Link></li>
                            <li><Link href="/services">Microbiology</Link></li>
                            <li><Link href="/services">Clinical Chemistry</Link></li>
                            <li><Link href="/services">Ultrasound</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.col}>
                        <h4 className={styles.heading}>Contact</h4>
                        <div className={styles.contactItem}>
                            <MapPin size={18} />
                            <span>Korle-Bu, Accra</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone size={18} />
                            <span>024 425 1376</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={18} />
                            <span>info@mgdiagnostic.com</span>
                        </div>
                    </div>

                    {/* Social / Newsletter */}
                    <div className={styles.col}>
                        <h4 className={styles.heading}>Connect</h4>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
                            <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                            <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} M & G Medical Diagnostic Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
