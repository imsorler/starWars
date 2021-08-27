import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './UIVideo.module.css'

const UIVideo = ({ playbackRate=1.0, src, classes }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate
  }, [])
  
  return (
    <video
      loop
      autoPlay
      muted
      playbackRate={playbackRate}
      className={cn(styles.video, classes)}
      ref={videoRef}
      width='300px'
      height='auto'
    >
      <source src={src} />
    </video>
  )
}


UIVideo.propTypes = {
  playbackRate: PropTypes.number,
  src: PropTypes.string,
  classes: PropTypes.string,
}

export default UIVideo