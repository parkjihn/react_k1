import React from "react";
import styles from "./LeftImgrightText.module.css";
function LeftImgrightText(props) {
  return (
    <>
      <div className={styles.image}>
        <img src={props.image} alt=""></img>
      </div>

      <div className={styles.topBottom}>
        <div className={styles.heading}>Прокат велосипедов</div>

        <div className={styles.text}>
          У нас вы можете взять на прокат хорошо обслуженные и настроенные
          велосипеды. Как раз мы находимся в прекрасном парке!
        </div>
      </div>
    </>
  );
}

export default LeftImgrightText;
