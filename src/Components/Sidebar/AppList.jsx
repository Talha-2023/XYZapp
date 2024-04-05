import styles from "./AppList.module.css"
import { SlSpeedometer } from "react-icons/sl";

const AppList = () => {
  return (
    
    <div className={styles.sidebar_apps}>
      <SlSpeedometer className={styles.app_icon} />
      <p> BMI Calculator</p>
    </div>
 
  )
}

export default AppList