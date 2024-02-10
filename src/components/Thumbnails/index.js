import './index.css'

const Thumbnails = props => {
  const {thumbnailDetails, onThumbnail} = props
  const {id, thumbnailUrl} = thumbnailDetails
  const onClickThumbnail = () => {
    onThumbnail(id)
  }
  return (
    <li>
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default Thumbnails
