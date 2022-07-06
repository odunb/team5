import styles from "./index.module.css"
import DataFetching from "../components/DataFetching";


export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Open <span className={styles.titleSpan}>todos</span></h1>
            <DataFetching/>
        </div>
    )
}
