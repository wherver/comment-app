import React,{ Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

class CommentApp extends Component {
    static propTypes={
        comment:PropTypes.object.isRequired,
        onDeleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    constructor(props){
        super(props)
        this.state={
            comments:[]
        }
    }
    
    // 评论持久化
    componentWillMount(){
        this._loadComments()
    }
    _loadComments(){
        let comments =localStorage.getItem('comments')
        if(comments){
            comments=JSON.parse(comments)
            this.setState({comments})
        }
    }
    _saveComments (comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    handelSubmitComment(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        else {
            const comments = this.state.comments
            comments.push(comment)
            this.setState({ comments })
            this._saveComments(comments)
        }
    }
    handleDeleteComment(index){
        const comments = this.state.comments
        comments.splice(index,1)
        this.setState({comments})
        this._saveComments(comments)
    }
    render () {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handelSubmitComment.bind(this)}
                />
                <CommentList 
                onDeleteComment={this.handleDeleteComment.bind(this)}
                comments={this.state.comments}/>
            </div>
        )
    }
}
export default CommentApp