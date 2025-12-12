"use client";
import React, { useState } from 'react';
import styles from './booking.module.css';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        testType: '',
        date: '',
        time: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Appointment request sent! We will contact you shortly to confirm.');
        // Here you would typically integrate with a backend
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.formWrapper}>
                    <h1 className={styles.title}>Book an Appointment</h1>
                    <p className={styles.subtitle}>Schedule your visit or home sample collection request.</p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className={styles.input}
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Test Type</label>
                            <select
                                name="testType"
                                className={styles.select}
                                value={formData.testType}
                                onChange={handleChange}
                            >
                                <option value="">Select a service...</option>
                                <option value="General Checkup">General Checkup</option>
                                <option value="Malaria Test">Malaria Test</option>
                                <option value="Blood Work">Blood Work</option>
                                <option value="Ultrasound">Ultrasound</option>
                                <option value="Home Collection">Home Sample Collection</option>
                            </select>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className={styles.input}
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    required
                                    className={styles.input}
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
