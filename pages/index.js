import styles from "./index.module.css"

export default function Home() {
  return (
    <div>
        <h1 className={styles.title}>Explore the beauty of <span className={styles.titleSpan}>our planet</span></h1>
    </div>
  )
}
