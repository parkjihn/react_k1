import React from "react";
import styles from "./MiddleText.module.css";
function MiddleText() {
  return (
    <>
      <div className={styles.firstParag}>
        Приехав к нам однажды, многие наши клиенты становятся постоянными, а
        часть из них даже друзьями.
      </div>

      <div className={styles.secondParag}>
        А также в нашей мастерской можно отремонтировать электросамокат и
        электровелосипед.
      </div>
    </>
  );
}

export default MiddleText;
