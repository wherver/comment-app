import React, { Component } from 'react'

class CommentInput extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            content:''
        }
    }
    handelUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handelContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handelSubmit(){
        if(this.props.onSubmit){
            const { username, content } =this.state
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} 
                onChange={this.handelUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} 
            onChange={this.handelContentChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handelSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput