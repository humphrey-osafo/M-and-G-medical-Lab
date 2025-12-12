import styles from "../blog.module.css";
import { notFound } from "next/navigation";

const posts = [
  {
    id: 1,
    title: "Understanding Malaria: Symptoms & Prevention",
    date: "December 1, 2025",
    category: "Health Tips",
    content:
      "Malaria remains a significant health concern in Ghana. Early recognition of symptoms and preventive measures such as treated nets and prompt testing are essential to reduce transmission and severe disease.",
  },
  {
    id: 2,
    title: "Why Regular Liver Function Tests Matter",
    date: "November 24, 2025",
    category: "Diagnostics",
    content:
      "Your liver plays a vital role in metabolism and detoxification. Routine LFTs help detect issues early, guiding lifestyle changes and clinical interventions for better outcomes.",
  },
  {
    id: 3,
    title: "Preparing for Your Fasting Blood Sugar Test",
    date: "November 15, 2025",
    category: "Patient Guide",
    content:
      "Accurate fasting blood sugar results depend on following pre-test instructions, including fasting duration and hydration. Proper preparation improves diagnostic reliability.",
  },
  {
    id: 4,
    title: "The Importance of Typhoid Screening",
    date: "November 02, 2025",
    category: "Health Tips",
    content:
      "Typhoid fever shares symptoms with other illnesses. Accurate screening and timely treatment reduce complications and community spread.",
  },
];

export function generateStaticParams() {
  return posts.map((p) => ({ id: String(p.id) }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find((p) => String(p.id) === params.id);
  if (!post) return notFound();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.category}>{post.category}</div>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.date}>{post.date}</p>
          <p className={styles.excerpt}>{post.content}</p>
        </div>
      </div>
    </div>
  );
}
