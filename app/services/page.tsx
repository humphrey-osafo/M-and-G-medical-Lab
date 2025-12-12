"use client";
import React from 'react';
import styles from './services.module.css';

const servicesList = [
    {
        category: "Laboratory Services",
        items: [
            { name: "Full Blood Count (FBC)", price: "GHS 80", tat: "1 Hour" },
            { name: "Malaria Parasite Test", price: "GHS 50", tat: "1 Hour" },
            { name: "Liver Function Test", price: "GHS 150", tat: "4 Hours" },
            { name: "Lipid Profile", price: "GHS 140", tat: "4 Hours" },
            { name: "Kidney Function Test", price: "GHS 150", tat: "4 Hours" },
            { name: "Widal Test (Typhoid)", price: "GHS 60", tat: "1 Hour" }
        ]
    },
    {
        category: "Specialized Diagnostics",
        items: [
            { name: "Hormonal Profile", price: "GHS 400", tat: "24 Hours" },
            { name: "Tumor Markers", price: "GHS 350", tat: "24 Hours" },
            { name: "HbA1c (Diabetes)", price: "GHS 120", tat: "2 Hours" },
            { name: "Semen Analysis", price: "GHS 200", tat: "24 Hours" }
        ]
    },
    {
        category: "Imaging & Others",
        items: [
            { name: "Ultrasound Scan", price: "GHS 150", tat: "Immediate" },
            { name: "ECG", price: "GHS 100", tat: "Immediate" },
            { name: "Medical Counselling", price: "---", tat: "immediate" }
        ]
    },
    {
        category: "Specialized Testing",
        items: [
            { name: "Paternity Testing (DNA Analysis)", price: "---", tat: "---" },
            { name: "Other DNA-based tests", price: "---", tat: "---" }
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Our Services & Pricing</h1>
                <p className={styles.subtitle}>
                    Transparent pricing for world-class diagnostic services.
                </p>
            </header>

            <div className={styles.content}>
                {servicesList.map((category, idx) => (
                    <section key={idx} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle}>{category.category}</h2>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Test Name</th>
                                        <th>Turnaround Time</th>
                                        <th>Price Estimate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.items.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.name}</td>
                                            <td>{item.tat}</td>
                                            <td className={styles.price}>{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
