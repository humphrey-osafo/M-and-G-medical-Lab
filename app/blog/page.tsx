"use client";
import React from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

const blogPosts = [
    {
        id: 1,
        title: "Understanding Malaria: Symptoms & Prevention",
        date: "December 1, 2025",
        excerpt: "Malaria remains a significant health concern in Ghana. Learn about the early warning signs and how to protect your family.",
        category: "Health Tips"
    },
    {
        id: 2,
        title: "Why Regular Liver Function Tests Matter",
        date: "November 24, 2025",
        excerpt: "Your liver plays a vital role in your overall health. Discover why routine screening is essential for early detection of issues.",
        category: "Diagnostics"
    },
    {
        id: 3,
        title: "Preparing for Your Fasting Blood Sugar Test",
        date: "November 15, 2025",
        excerpt: "Getting accurate results starts with proper preparation. Here is a simple guide on what to do before your blood sugar test.",
        category: "Patient Guide"
    },
    {
        id: 4,
        title: "The Importance of Typhoid Screening",
        date: "November 02, 2025",
        excerpt: "Typhoid fever shares symptoms with many other illnesses. Accurate testing is key to effective treatment.",
        category: "Health Tips"
    }
];

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h1 className={styles.title}>Health & Wellness Hub</h1>
                <p className={styles.subtitle}>Latest updates, health tips, and medical insights from M & G.</p>
            </header>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={styles.card}>
                            <div className={styles.category}>{post.category}</div>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <p className={styles.date}>{post.date}</p>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <Link href={`/blog/${post.id}`} className={styles.readMore}>
                                Read Article &rarr;
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
