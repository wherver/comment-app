import React,{ Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    handelSubmitComment(comment){
        console.log(comment)
    }
    render () {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handelSubmitComment.bind(this)}
                />
                <CommentList/>
            </div>
        )
    }
}
export default CommentApp