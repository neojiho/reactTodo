import React, {Component} from 'react';

class TodoLi extends Component {

	constructor(){
		super();
		this.onClickRemoveButton = this.onClickRemoveButton.bind(this);
	}

	onClickRemoveButton(){
		this.props.handleRemovedData(this.props.todo);
		//부모 Todo로 부터받은 handleRemovedData함수에 해당 todo할일을 인자로 넘겨실행함.
	}

	render(){

		return(
			<li>
				<span>{this.props.todo}</span>
				<span className='btn-container'>
					<a href="#"
					   onClick={this.onClickRemoveButton}
					>삭제</a>
				</span>
			</li>
		)
	}
}

export default TodoLi;