import React from "react";
import styles from "./leftTextrightImg.module.css";

function LeftTextrightImg(props) {
  return (
    <>
    <div className={styles.container} style={{backgroundColor: props.color}}>
    <div className={styles.headingText}>
        <div className={styles.heading}>{props.heading}</div>

        <div className={styles.text}>{props.text}</div>
      </div>
      <div className={styles.image}><img src={props.image} alt=''></img></div>

    </div>
     
    </>
  );
}

export default LeftTextrightImg;
