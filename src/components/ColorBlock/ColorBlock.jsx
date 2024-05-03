import React from 'react'
import styles from './ColorBlock.module.css'
function ColorBlock(props) {
    return (
       <>
       <div className='color' style={{backgroundColor: props.color}}>
       <div className={styles.text}>
            {props.text}
        </div>
       </div>
      
       </>
    )
}

export default ColorBlock
