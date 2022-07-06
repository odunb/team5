import styles from "./CreateToDo.module.css"
import {useState} from "react";
import {useRouter} from "next/router";



export default function CreateToDo(){
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


    return(
        <div className={styles.contactForm}>
            <form>
                <h1>Create youre <span className={styles.textSpan}>todo</span></h1>
                <div className={styles.inputBox}>
                    <input onChange={(e)=>handle(e)} id="title" value={data.title} type="text" name="" required="required"/>
                    <span>Title</span>
                </div>
                <div className={styles.inputBox}>
                    <input onChange={(e)=>handle(e)} id="date" value={data.date} type="date" name="" required="required"/>
                </div>
                <div className={styles.inputBox}>
                    <input onClick={handlePost} type="submit" name="" value="Create"/>
                </div>
            </form>
        </div>
    )
}