import { useTheme, THEME_LIGTH, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvide'

import PropTypes from 'prop-types'

import cn from 'classnames'
import imgLightSide from './ChoozeSide/img/light.jpg'
import imgDarkSide from './ChoozeSide/img/dark.png'
import imgNeitralSide from './ChoozeSide/img/neitral.jpg'
import styles from './ChoozeSide.module.css'

const ChooseSideItem = ({
  classes,
  theme,
  text,
  img,
}) => {
  const isTheme = useTheme()
  return (
    <div
      className={cn(styles.item, classes)} 
      onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  )
}

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.func,
  text: PropTypes.string,
  img: PropTypes.string,
}

const ChoozeSide = () => {
  const elements = [
    {
      classes: styles.item__light,
      theme: THEME_LIGTH,
      text: 'Light side',
      img: imgLightSide
    },
    {
      classes: styles.item__dark,
      theme: THEME_DARK,
      text: 'Dark side',
      img: imgDarkSide
    },
    {
      classes: styles.item__neitral,
      theme: THEME_NEITRAL,
      text: 'I\'am Chewbacca',
      img: imgNeitralSide
    }
  ]

  return (
    <div className={styles.container}>
      {elements.map(({classes, theme, text, img}, index) => (
        <ChooseSideItem
          key={index}
          classes={classes}
          theme={theme}
          text={text}
          img={img}
        />
      ))}
    </div>
  )
}

export default ChoozeSide