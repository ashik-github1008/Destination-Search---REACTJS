// Write your code here
import './index.css'

const DestinationItem = props => {
  const {imageUrl, descName} = props

  return (
    <li className="destination-card">
      <img className="img mb-4" src={imageUrl} alt={descName} />
      <p className="dest-name">{descName}</p>
    </li>
  )
}

export default DestinationItem
