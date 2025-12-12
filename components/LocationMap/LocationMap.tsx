import styles from './location.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function LocationMap() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoCard}>
                    <h2 className={styles.title}>Visit Us</h2>
                    <div className={styles.detailItem}>
                        <MapPin className={styles.icon} />
                        <p>No. 29 Ebenezer Crescent, Mamprobi,<br />Box KB 581, Korle-Bu, Accra.</p>
                    </div>
                    <div className={styles.detailItem}>
                        <Phone className={styles.icon} />
                        <p>024 425 1376</p>
                    </div>
                    <div className={styles.detailItem}>
                        <Mail className={styles.icon} />
                        <p>info@mgdiagnostic.com</p>
                    </div>
                    <div className={styles.detailItem}>
                        <Clock className={styles.icon} />
                        <p>Open 24/7</p>
                    </div>
                </div>

                <div className={styles.mapWrapper}>
                    {/* Embedded Google Map Placeholder - using iframe logic for real implementation */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0456172600293!2d-0.22240682525799338!3d5.560249794420792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a1b3be5d057%3A0x6b3b0b3b0b3b0b3b!2sMamprobi%2C%20Accra!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={styles.mapFrame}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
