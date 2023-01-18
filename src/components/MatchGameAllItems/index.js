import './index.css'

const MatchGameAllItems = props => {
  const {array, OnClickImg} = props
  const {id, thumbnailUrl} = array
  const onClickImage = () => {
    OnClickImg(id)
  }
  return (
    <li className="eachImgthumbnail">
      <button type="button" className="btnimgthumb" onClick={onClickImage}>
        <img className="imgthumb" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchGameAllItems
