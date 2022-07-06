import styles from "./aboutUs.module.css"


export default function AboutUs() {

    return (
        <div>
            <h1 className={styles.title}>Learn more <span className={styles.titleSpan}>about us</span></h1>
            <div className={styles.text}>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. </p>
            </div>
        </div>
    )
}