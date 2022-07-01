import React, {useState, useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import styles from "./DataFetching.module.css"
import img from "../public/image.jpg"


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

    function handleButtonClick(id) {
        router.push(`post/${id}`)
    }

    return (
        <div className={styles.overAllContainer}>
            {
                posts.map( (post) => {
                    return(
                        <div key={post.id} className={styles.container}>
                            <img src={img} alt="img"/>
                            <div className={styles.lowerContainer}>
                                <h2 className={styles.containerTitle}>{post.name}</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <button>See More</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataFetching