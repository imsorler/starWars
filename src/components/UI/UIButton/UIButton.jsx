import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './UIButton.module.css'
import '../index.css'

const UIButton = ({
  text,
  onClick,
  disabled,
  theme='dark',
  classes
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.button, styles[theme], classes)}
      >
      {text}
    </button>
  )
}


UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
}

export default UIButton