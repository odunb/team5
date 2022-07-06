import styles from "./index.module.css"
import DataFetching from "../components/DataFetching";
import CreatePost from "../components/CreatePost";


export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.dataContainer}>
                <CreatePost/>
                <DataFetching/>
            </div>
        </div>
    )
}
