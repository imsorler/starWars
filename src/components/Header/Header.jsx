import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Favorite from '@components/Favorite'
import { useTheme, THEME_LIGTH, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvide'

import imgDroid from './img/droid.svg'
import lightSaber from './img/light-saber.svg'
import spaceStation from './img/space-station.svg'
import styles from './Header.module.css'

const Header = () => {
  const [icon, setIcon] = useState(spaceStation)
  const isTheme = useTheme()

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGTH:
        setIcon(lightSaber)
        break
      case THEME_DARK:
        setIcon(spaceStation)
        break
      case THEME_NEITRAL:
        setIcon(imgDroid)
        break
      default: setIcon(spaceStation)
    }
  }, [isTheme])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt='Star Wars logo'/>
      <ul className={styles.list__container}>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/people/?page=1">People</NavLink></li>
        <li><NavLink to="/not-found" exact>Not Found</NavLink></li>
      </ul>
      <Favorite />
    </div>
  )
}

export default Header