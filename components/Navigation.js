import Link from "next/link";
import styles from "./Navigation.module.css"

export default function Navigation() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ToDo5</h1>
            <div className={styles.navbar}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/createToDo"><a>Create</a></Link>
                <Link href="/aboutUs"><a>About</a></Link>
            </div>
        </div>
    )
}