import styles from "./index.module.css"
import DataFetching from "../components/DataFetching";

export default function Home() {
  return (
    <div>
        <h1 className={styles.title}>Explore the beauty of <span className={styles.titleSpan}>our planet</span></h1>
        <DataFetching/>
    </div>
  )
}
