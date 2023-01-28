// // Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const buttons = {
  delete:
    'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png',
}

const CommentItem = props => {
  const {
    commentDetails,
    backgroundColor,
    onDeleteComment,
    onChangeIsLike,
  } = props
  const {id, userName, comment, isLike} = commentDetails

  const firstLetter = userName.slice(0, 1)

  const dateTime = formatDistanceToNow(new Date())

  const index = Math.ceil(Math.random() * backgroundColor.length - 1)
  const backColor = backgroundColor[index]

  const onClickLike = () => {
    onChangeIsLike(id)
  }
  const onClickDelete = () => {
    onDeleteComment(id)
  }
  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const isLikeImgUrl = isLike ? 'liked' : 'notLiked'

  return (
    <li className="list-container">
      <div className="comments-container">
        <p className={`firstLetter ${backColor}`}>{firstLetter}</p>
        <div className="name-comment-container">
          <span className="commenter-name">{userName}</span>
          <span className="time">{dateTime}</span>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-buttons">
        <button className="buttons" type="button" onClick={onClickLike}>
          <img className="like-image" alt="like" src={likeImgUrl} />
          <span className={`like-text ${isLikeImgUrl}`}>Like</span>
        </button>
        <button
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
          type="button"
        >
          <img alt="delete" src={buttons.delete} />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
