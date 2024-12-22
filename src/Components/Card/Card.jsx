import React from 'react'
import styles from "../Card/Card.module.css"

const Card = ({id, imgSrc, title, desc}) => {
  return (
    <div className={styles.container}>
    <div className={styles.cardDiv}>
        <img src={imgSrc} alt="" />
        <h2>Id: {id}</h2>
        <h3>Title: {title}</h3>
        <p>{desc}</p>
    </div>
    </div>
  )
}

export default Card