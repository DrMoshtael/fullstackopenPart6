import { useContext } from "react"
import NotificationContext from './notificationContext'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  const [text, dispatch] = useContext(NotificationContext)
  if (text === '') return null
  else if (text !== '') setTimeout(() => dispatch({ type: 'NOTHING' }), 5000)

  return (
    <div style={style}>
      {text}
    </div>
  )
}

export default Notification
