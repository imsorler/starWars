import { useDispatch } from 'react-redux'
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions'

import PropTypes from 'prop-types'

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-yellow.svg'
import styles from './PersonPhoto.module.css'

const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch()

  const dispatchFavoritePepople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        }
      }))
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img
          src={personPhoto}
          alt={personName}
          className={styles.photo}
        />
        <img 
          className={styles.favorite}
          onClick={dispatchFavoritePepople}
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt='Add to favorite'
      />
      </div>
    </>
  )
}


PersonPhoto.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonPhoto