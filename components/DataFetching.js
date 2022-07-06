import React, {useState, useEffect, useCallback} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import styles from "./DataFetching.module.css"
import { MdDelete, MdDone } from "react-icons/md";



function DataFetching() {
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        axios.get(`https://cosmosteam5.azurewebsites.net/api/HttpTriggerINPUT324TE5RHFZN?code=XaWDyNwvFNxnd8BaJVk4CufNUg3sVHl5uzuULyXzS08oAzFuZA5_KA==`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function donePost(idTitle,idCheckbox) {
        const checkbox = document.getElementById(idCheckbox)
        const title = document.getElementById(idTitle);
        if (checkbox){
            console.log("Checked")
            title.style.textDecoration='line-through';
        } else {
            console.log("Unchecked")
            title.style.textDecoration='none';
        }
    }

    async function deletePost(id){
        console.log(id)
        try {
            let response = await fetch("https://cosmosteam5.azurewebsites.net/api/HttpTriggerdelete?code=SldWVNTVtlWnhSAFAyWC1LjPbMwMwn-C0h-sgVCN5H6gAzFutnFIgQ=="+"&id="+id,{
                method: "DELETE"
            })
            if (response.ok) {
                setPosts(posts.filter((e) => e.id != id))
            }

        } catch (error){
            console.log(error)
        }
    }

    return (
        <div className={styles.overAllContainer}>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id} className={styles.container} id="container">
                            <div className={styles.title}>
                                <h2 id={post.title}>{post.title}</h2>
                            </div>
                            <div className={styles.date}>
                                <h2>Done until: {post.date}</h2>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={() => deletePost(post.id)} className={styles.deleteBtn}><MdDelete className={styles.delete}/></button>
                                <input  onClick={() => donePost(post.title,post.title)} className={styles.checkbox} type="checkbox" id={post.title} name="checkbox"/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataFetching