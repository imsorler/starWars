import cn from 'classnames'
import styles from './App.module.css'

const App = () => {
  return (
    <h1 className={cn(styles.header, styles.text)}>Hello APP!</h1>
  )
}

export default App