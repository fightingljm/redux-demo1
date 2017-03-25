import React from 'react';
import store from '../store';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state={
      comments:store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(store.getState());
    store.dispatch({type:'ADD_COMMENT',comment:this.refs.content.value});
    console.log(store.getState());
    this.refs.commentForm.reset();
    this.setState({comments:store.getState()})
  }
  render(){
    let  commentList = this.state.comments.map(item => {
      return(
        <div key={Math.random()} className="comment">{item}</div>
      )
    })
    return(
      <div className="comment-box">
        CommentBox
        {commentList}
        <form className="comment-form" ref='commentForm' onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="input" ref='content'/>
          <button type="submit" className="submit-btn">提 交</button>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}

export default CommentBox;
