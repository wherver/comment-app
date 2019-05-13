import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes={
    onSubmit:PropTypes.func.isRequired
  }
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
           
            this.props.onSubmit({
              username:this.state.username,
              content:this.state.content,
              createdTime:+new Date()
            })
        }
        this.setState({content:''})
    }
    // 自动获取用户名
    _loadUserxname(){
      const username=localStorage.getItem('username')
      if(username){
        this.setState({username})
      }
    }
    componentWillMount(){
      this._loadUserxname()
    }
    componentDidMount(){
      this.textarea.focus()
    }
    _saveUsername(username){
      localStorage.setItem('username' , username)
    }
    handleUsernameBlur(event){
      this._saveUsername(event.target.value)
    }
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} 
                onChange={this.handelUsernameChange.bind(this)}
                onBlur={this.handleUsernameBlur.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} 
            onChange={this.handelContentChange.bind(this)}
            ref={(textarea)=>this.textarea=textarea}
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