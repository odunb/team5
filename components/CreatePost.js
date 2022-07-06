import styles from "./CreatePost.module.css";
import {useState} from "react";
import {toast} from "react-toastify";


export default function CreatePost() {
    const [data, setData] = useState({
        title: "",
        date: "",
    })

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    async function handlePost() {
        const resp = await fetch("https://cosmosteam5.azurewebsites.net/api/HttpTriggerinput?code=Cs6O8yOaGDJW7qNom4vsjlBVLskKBGtRlE8oQIaweiJYAzFuwuX3Hg==", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": data.title,
                "date": data.date,
            })
        })
        console.log(resp)
        toast.info("Add Task")

    }

    return(
        <div>
            <div className={styles.contactForm}>
                <form onSubmit={handlePost}>
                    <h1>Add new <span className={styles.textSpan}>task</span></h1>
                    <div className={styles.inputBox}>
                        <label>Title</label>
                        <input onChange={(e)=>handle(e)} id="title" value={data.title} type="text" name="" required="required"/>
                    </div>
                    <div className={styles.inputBox}>
                        <input onChange={(e)=>handle(e)} id="date" value={data.date} type="date" name="" required="required"/>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </div>
        </div>
    )
}