import React, {Component} from 'react';

class TodoLi extends Component {
	render(){

		return(
			<li>
				{/* 만약 각각의 component가 아닌 template만 반복해야하는경우 virtual dom은 각각의 unique한 id가 있어야해서 아래와같이
				 key={"todo"+ this.props.idx} 설정함 */}
				<span>{this.props.todo}</span>
				<span className='btn-container'><a href="">삭제</a></span>
			</li>
		)
	}
}

export default TodoLi;