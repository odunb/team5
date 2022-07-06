import styles from "./index.module.css"
import DataFetching from "../components/DataFetching";
import {useRouter} from "next/router";
import {useState} from "react";
import Modal from "../components/Modal";


export default function Home() {
    const [openModal, setOpenModal] = useState(false);

    const [data, setData] = useState({
        title: "",
        date: "",
    })

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
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
    }

    return (
        <div className={styles.container}>
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
                        <input type="submit"/>
                    </div>
                </form>
            </div>
            <div className={styles.dataContainer}>
                <DataFetching/>
            </div>
        </div>
    )
}
