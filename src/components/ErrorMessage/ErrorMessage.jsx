import UIVideo from '@ui/UIVideo'
import video from './video/tv.mp4'
import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {

  return (
    <>
      <p className={styles.text}>
        The dark side has won.<br />
        We cannot display data.<br />
        Sorry (((<br />
      </p>
      <UIVideo src={video} classes={styles.video} playbackRate={1.5}/>
    </>
  )
}

export default ErrorMessage