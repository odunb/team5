import styles from "./ContactForm.module.css"
import {useState} from "react";
import Axios from "axios";

export default function ContactFom(){
    const url = "https://cosmosteam5.azurewebsites.net/api/HttpTriggerinput?code=Cs6O8yOaGDJW7qNom4vsjlBVLskKBGtRlE8oQIaweiJYAzFuwuX3Hg=="
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e) {
        e.preventDefault
        Axios.post(url,{
            name: data.name,
            email: data.email,
            message: data.message
        })
            .then(res => {
                console.log(res)
            })
    }


    return(
        <div className={styles.contactForm}>
            <form>
                <h1>Fill this form to <span className={styles.textSpan}>contact us</span></h1>
                <div className={styles.inputBox}>
                    <input onChange={(e)=>handle(e)} id="name" value={data.name} type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className={styles.inputBox}>
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div className={styles.inputBox}>
                    <textarea onChange={(e)=>handle(e)} id="message" value={data.message} type="text" name="" required="required"></textarea>
                    <span>Type your Message...</span>
                </div>
                <div className={styles.inputBox}>
                    <input type="submit" name="" value="Send"/>
                </div>
            </form>
        </div>
    )
}