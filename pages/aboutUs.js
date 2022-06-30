import styles from "./aboutUs.module.css"
import img from "../public/aboutPic.jpg"

export default function AboutUs() {

    console.log(img)
    return(
        <div>
            <h1 className={styles.title}>Learn more <span className={styles.titleSpan}>about us</span></h1>
            <img src={img}/>
        </div>
    )
}