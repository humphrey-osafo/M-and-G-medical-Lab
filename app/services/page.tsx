"use client";
import React from 'react';
import styles from './services.module.css';
import { servicesList } from '../data/services';

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
