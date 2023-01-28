import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
// import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
// const initialContactsList = [
//     id:uuidv4,
//     userName:"",
//     comment:"",
//     isLike:"",
//     date: newDate,

// ]
// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    userName: '',
    comment: '',
    commentsCount: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    // const initialClassName = `initial-container ${
    //   initialContainerBackgroundClassNames[
    //     Math.ceil(
    //       Math.random() * initialContainerBackgroundClassNames.length - 1,
    //     )
    //   ]
    // }`
    const {userName, comment} = this.state
    const newComment = {
      id: uuidv4,
      userName,
      comment,
      isLike: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      commentsCount: prevState.commentsCount + 1,
      userName: '',
      comment: '',
    }))
  }

  onChangeIsLike = id => {
    const {commentsList} = this.state

    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLike: !eachItem.isLike}
        }
        return eachItem
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList, commentsCount} = this.state
    const deletedItemList = commentsList.filter(eachItem => eachItem.id !== id)

    this.setState(prevState => ({
      commentsCount: prevState.commentsCount - 1,
      commentsList: deletedItemList,
    }))
  }

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, userName, comment, commentsCount} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Comments</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
          <form className="comments-container" onSubmit={this.onAddComment}>
            <p className="description">Say Something about 4.O Technologies</p>
            <input
              className="input"
              value={userName}
              onChange={this.onChangeName}
              placeholder="Your Name"
            />
            <textarea
              type="text"
              className="input1"
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
            <hr />
          </form>
          <p className="comments">
            <span className="comments-count">{commentsCount}</span>Comments
          </p>
          <ul className="comments-container">
            {commentsList.map(eachCommentItem => (
              <CommentItem
                onChangeIsLike={this.onChangeIsLike}
                backgroundColor={initialContainerBackgroundClassNames}
                key={eachCommentItem.id}
                commentDetails={eachCommentItem}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
