import { useDispatch } from 'react-redux'
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions'

import PropTypes from 'prop-types'
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({ personPhoto, personName }) => {
  const dispatch = useDispatch()

  const set = () => {
    setPersonToFavorite()
  }

  const remove = () => {
    removePersonFromFavorite()
  }

  return (
    <>
      <div className={styles.container}>
        <img
        src={personPhoto}
        alt={personName}
        className={styles.photo}
        />
      </div>
      <button
        onClick={set}
      >Добавить в избранное
      </button>
      <button
        onClick={remove}
      >Удалить из избранного
      </button>
    </>
  )
}


PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
}

export default PersonPhoto