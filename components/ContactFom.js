import styles from "./ContactForm.module.css"

export default function ContactFom(){

    return(
        <div className={styles.contactForm}>
            <form>
                <h1>Fill this form to <span className={styles.textSpan}>contact us</span></h1>
                <div className={styles.inputBox}>
                    <input type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div className={styles.inputBox}>
                    <textarea type="text" name="" required="required"></textarea>
                    <span>Type your Message...</span>
                </div>
                <div className={styles.inputBox}>
                    <input type="submit" name="" value="Send"/>
                </div>
            </form>
        </div>
    )
}