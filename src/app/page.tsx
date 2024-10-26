import styles from "./page.module.css";
import { ShowMarkdown } from "./ShowMarkdown";

export default function Home() {
  return (
    <div className={styles.page}>
      <ShowMarkdown />
    </div>
  );
}
