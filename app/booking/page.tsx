"use client";
import React, { useState, useEffect } from 'react';
import styles from './booking.module.css';
import { getAllServices } from '../data/services';

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        additionalMessage: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [services, setServices] = useState<Array<{name: string, price: string, category: string}>>([]);

    useEffect(() => {
        // Load services when component mounts
        const services = getAllServices();
        setServices(services);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusMessage('Sending...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage('Appointment request sent successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    service: '',
                    date: '',
                    time: '',
                    additionalMessage: ''
                });
            } else {
                setStatusMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            setStatusMessage('Error: Could not send appointment request.');
        }
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

                        <div className={styles.row}>
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
                                <label>Email (Optional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Service</label>
                            <select
                                name="service"
                                required
                                className={styles.select}
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option value="">Select a service...</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service.name}>
                                        {service.name}
                                    </option>
                                ))}
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

                        <div className={styles.formGroup}>
                            <label>Additional Message (Optional)</label>
                            <textarea
                                name="additionalMessage"
                                rows={4}
                                className={styles.textarea}
                                value={formData.additionalMessage}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Book Appointment
                        </button>
                        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
