import React, {Component} from 'react';

class TodoLi extends Component {
	render(){

		return(
			<li>
				<span>{this.props.todo}</span>
				<span className='btn-container'><a href="javascript:void(0)">삭제</a></span>
			</li>
		)
	}
}

export default TodoLi;