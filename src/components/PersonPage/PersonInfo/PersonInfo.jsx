import PropTypes from 'prop-types'
import styles from './PersonInfo.module.css'

const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {personInfo.map(({ title, data }) => (
            data && (
              <li key={title} className={styles.list__item}>
                <span className={styles.list__title}>{title}:{data}</span>
              </li>
            )
          ))}
        </ul>
      </div>
    </>
  )
}


PersonInfo.propTypes = {
  PersonInfo: PropTypes.array
}

export default PersonInfo