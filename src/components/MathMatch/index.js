import './index.css'

const MathMatch = props => {
  const {matchDetails} = props
  const {imageUrl} = matchDetails
  return (
    <li>
      <img src={imageUrl} alt="match" className="match-img" />
    </li>
  )
}

export default MathMatch
