import Link from "next/link";
import styles from "./Navigation.module.css"

export default function Navigation() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Travel</h1>
            <div className={styles.navbar}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/contactUs"><a>Contact</a></Link>
                <Link href="/aboutUs"><a>About us</a></Link>
            </div>
        </div>
    )
}