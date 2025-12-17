"use client";
import React, { useState, useEffect } from 'react';
import styles from './booking.module.css';
import { getAllServices } from '../data/services';

export default function BookingPage() {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        additionalMessage: ''
    });

    // State for submission status
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState("");
    const [isError, setIsError] = useState(false);

    // State for services dropdown
    const [services, setServices] = useState<Array<{name: string, price: string, category: string}>>([]);

    useEffect(() => {
        const servicesData = getAllServices();
        setServices(servicesData);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setResult("");
        setIsError(false);

        const formElement = e.currentTarget;
        const web3FormData = new FormData(formElement);
        
        // Append Web3Forms specific data
        web3FormData.append("access_key", "3f84013f-1fd1-49ce-b552-b9dcbdbed6aa");
        web3FormData.append("subject", "New Appointment Booking - M&G Medical Lab");
        web3FormData.append("from_name", "M&G Medical Lab");
        web3FormData.append("replyto", formData.email); // Set user's email for reply-to

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: web3FormData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Appointment request sent successfully! We will be in touch shortly.");
                setIsError(false);
                // Reset form fields and state
                formElement.reset(); 
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
                console.error("Error from Web3Forms:", data);
                setResult(data.message || "Failed to send appointment request. Please try again.");
                setIsError(true);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("An error occurred while sending your request. Please check your connection and try again.");
            setIsError(true);
        } finally {
            setIsLoading(false);
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
                                disabled={isLoading}
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
                                    disabled={isLoading}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email (Optional, for confirmation)</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isLoading}
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
                                disabled={isLoading}
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
                                    disabled={isLoading}
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
                                    disabled={isLoading}
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
                                disabled={isLoading}
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className={styles.submitBtn}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Booking...' : 'Book Appointment'}
                        </button>
                        
                        {result && (
                            <p className={`${styles.statusMessage} ${isError ? styles.error : styles.success}`}>
                                {result}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
