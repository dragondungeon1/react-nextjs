import React from 'react'
import styles from "../styles/Home.module.css"

function About() {
    return <div className={styles.container}>
        <div className={styles.card}><h1>About me</h1>
            <p>
                I am a 3th year webdeveloper at mboRijnland Zoetermeer in the Netherlands. <br/>
                My goal is to make the internet a better and more easy to use place.

            </p>
        </div>

        <div className={styles.card}>
            <h2>Want to know more?</h2>
            <p>visit my <a href="https://github.com/dragondungeon1">GitHub</a></p>
        </div>
    </div>
}

export default About