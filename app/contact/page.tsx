"use client";
import React from 'react';
import styles from './contact.module.css';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Get In Touch</h1>
                <p className={styles.subtitle}>We are here to help you 24/7.</p>
            </header>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.infoCard}>
                        <div className={styles.item}>
                            <MapPin className={styles.icon} size={32} />
                            <div>
                                <h3>Visit Us</h3>
                                <p>No. 29 Ebenezer Crescent, Mamprobi, Box KB 581, Korle-Bu, Accra.</p>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <Phone className={styles.icon} size={32} />
                            <div>
                                <h3>Call Us</h3>
                                <p>024 425 1376</p>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <Mail className={styles.icon} size={32} />
                            <div>
                                <h3>Email Us</h3>
                                <p>info@mgdiagnostic.com</p>
                            </div>
                        </div>

                        <div className={`${styles.item} ${styles.whatsapp}`}>
                            <MessageCircle className={styles.icon} size={32} />
                            <div>
                                <h3>WhatsApp</h3>
                                <p>Chat with us for quick inquiries.</p>
                                <a href="https://wa.me/233244251376" target="_blank" className={styles.waLink}>Start Chat</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0456172600293!2d-0.22240682525799338!3d5.560249794420792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a1b3be5d057%3A0x6b3b0b3b0b3b0b3b!2sMamprobi%2C%20Accra!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
