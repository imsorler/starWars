import { useLocation } from 'react-router'
import img from './img/404.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()

  return (
    <>
      <img className={styles.img} src={img} alt="Not found" />
      <p className={styles.text}>Image not found for <ul>{location.pathname}</ul></p>
    </>
  )
}

export default NotFoundPage