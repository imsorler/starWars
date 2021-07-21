import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return (
        <>
          <p className={styles.text}>
            The dark side has won.<br />
            We cannot display data.<br />
            Sorry (((<br />
          </p>
        </>
    )
}

export default ErrorMessage