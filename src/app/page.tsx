import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Movies</h1>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/movies">
          <span>Popular movies</span>
        </Link>
      </div>
      <div>
        <Link href="/series">
          <span>Popular TV series</span>
        </Link>
      </div>
    </main>
  );
}
